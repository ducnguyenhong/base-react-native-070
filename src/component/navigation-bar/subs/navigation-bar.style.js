import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vMain: {
    height: 54,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#E6E6E6',
  },

  vWrapperLeftCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  vLeft: {},

  toBack: {
    paddingHorizontal: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgIconBack: {
    width: 7,
  },

  vCenter: {
    flex: 1,
  },

  tTitle: {
    color: '#121238',
    fontSize: 18,
    fontFamily: 'Averta-Semibold',
  },

  vRight: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },

  toSearch: {
    paddingLeft: 15,
  },

  toMore: {
    paddingLeft: 15,
    paddingVertical: 8,
  },

  toNoti: {
    paddingLeft: 15,
    position: 'relative',
  },

  vNumberNotiUnseen: {
    width: 16,
    height: 16,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BB6BD9',
    position: 'absolute',
    top: -6,
    right: -5,
    zIndex: 5,
  },

  tNumberNotiUnseen: {
    fontFamily: 'Averta-Semibold',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },

  tNumberNotiUnseenMedium: {
    fontFamily: 'Averta-Semibold',
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 1,
  },

  tNumberNotiUnseenLarge: {
    fontFamily: 'Averta-Semibold',
    fontSize: 8,
    color: '#fff',
    textAlign: 'center',
    height: '100%',
    paddingTop: 2,
  },

  imgIconSearch: {
    width: 20,
    height: 20,
  },

  thControlSeeMore: {
    borderRadius: 100,
    overflow: 'hidden',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -5,
  },
});
