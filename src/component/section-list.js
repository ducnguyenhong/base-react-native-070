import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  SectionList,
  View
} from 'react-native';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import API from 'utils/API';
import { wait } from 'utils/helper';

export default forwardRef((props, ref) => {
  const {
    hasSticky,
    style,
    contentContainerStyle,
    ListHeaderComponent,
    ListEmptyComponent,
    renderItem,
    renderSectionHeader,
    listKey,
    horizontal,
    defaultPage = 0,
    defaultSize = 10,
    pageField = 'page',
    sizeField = 'size',
    responseField,
    config,
    changeStatus,
    getNextPageParam,
    onRefreshList,
    transformResponseItem,
    keyExtractor,
  } = props;

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const loadingMore = useRef(false);
  const queryClient = useQueryClient();

  useImperativeHandle(ref, () => ({
    refresh() {
      onRefreshManual();
    },
    reset() {
      onResetManual();
    },
  }));

  const { fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
    JSON.stringify(config),
    ({ pageParam = defaultPage }) => {
      if (changeStatus) {
        changeStatus({ status: 'start', data: { page: pageParam } });
      }

      const newConfig = JSON.parse(JSON.stringify(config));
      if (!newConfig.params) {
        newConfig.params = {};
      }

      if (pageParam) {
        newConfig.params[pageField] = pageParam;
      }
      newConfig.params[sizeField] = defaultSize;
      return API.request(newConfig);
    },
    {
      onSuccess: response => {
        const newList = checkData(response);
        checkChangeStatus(response, newList);
        updateLoadMore();
      },
      getNextPageParam: (lastPage, allPages) => {
        const value = responseField ? get(lastPage, responseField) : lastPage;

        if (value.length < defaultSize) {
          return undefined;
        }

        if (getNextPageParam) {
          return getNextPageParam(lastPage, allPages);
        }

        return allPages.length + defaultPage;
      },
    },
  );

  const checkData = useCallback(
    response => {
      let newList = [];

      const { pages } = response || {};
      if (Array.isArray(pages) && pages.length > 0) {
        pages.forEach(item => {
          let value = [];

          if (!transformResponseItem) {
            value = responseField ? get(item, responseField) : item;
          } else {
            value = transformResponseItem(item);
          }

          newList.push(...value);
        });
      }

      setData(newList);

      return newList;
    },
    [responseField, transformResponseItem],
  );

  const checkChangeStatus = useCallback(
    (response, newList) => {
      if (!changeStatus) {
        return;
      }

      const { pageParams, pages } = response;

      let page;
      if (Array.isArray(pageParams) && pageParams.length > 0) {
        const lastItem = pageParams[pageParams.length - 1];
        if (lastItem === undefined) {
          page = defaultPage;
        } else {
          page = lastItem;
        }
      }

      let status, array;
      const lastPage = pages[pages.length - 1];

      if (transformResponseItem) {
        array = transformResponseItem(lastPage);
      } else {
        array = responseField ? get(lastPage, responseField) : lastPage;
      }

      if (array.length === 0 && page === defaultPage) {
        status = 'no-data';
      } else if (array.length < defaultSize) {
        status = 'load-finish';
      } else {
        status = 'load-success';
      }
      changeStatus({
        status,
        data: { list: newList, page },
      });
    },
    [
      changeStatus,
      defaultPage,
      defaultSize,
      responseField,
      transformResponseItem,
    ],
  );

  const updateLoadMore = useCallback(() => {
    setLoadMore(false);
    loadingMore.current = false;
  }, []);

  const onRefreshManual = useCallback(() => {
    setData(_ => []);
    queryClient.refetchQueries(JSON.stringify(config));
  }, [config, queryClient]);

  const onResetManual = useCallback(() => {
    setData(_ => []);
    queryClient.resetQueries(JSON.stringify(config), { exact: true });
  }, [config, queryClient]);

  const onRefresh = useCallback(() => {
    onRefreshList && onRefreshList();
    loadingMore.current = false;

    setData(_ => []);
    setRefreshing(true);
    wait(1000).then(() => {
      queryClient.resetQueries(JSON.stringify(config), { exact: true });
      setRefreshing(false);
    });
  }, [config, onRefreshList, queryClient]);

  const renderFooter = useCallback(() => {
    if (!loadMore || !hasNextPage) {
      return <View />;
    }

    return (
      <View
        style={{
          alignItems: 'center',
          width: Dimensions.get('window').width,
        }}>
        <ActivityIndicator
          style={{
            color: '#000',
          }}
        />
      </View>
    );
  }, [hasNextPage, loadMore]);

  const onLoadMore = useCallback(() => {
    if (isLoading) {
    }
    if (!hasNextPage || loadingMore.current) {
      return;
    }

    loadingMore.current = true;
    setLoadMore(true);
    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isLoading]);

  return (
    <SectionList
      stickySectionHeadersEnabled={hasSticky}
      sections={!isEmpty(data) ? [{ title: '', data }] : []}
      style={style}
      contentContainerStyle={contentContainerStyle}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={ListEmptyComponent}
      listKey={listKey}
      keyExtractor={keyExtractor}
      horizontal={horizontal}
      refreshing={isLoading}
      initialNumToRender={10}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReachedThreshold={0.3}
      onEndReached={onLoadMore}
    />
  );
});
