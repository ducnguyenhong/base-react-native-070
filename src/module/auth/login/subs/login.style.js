import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // main
  savMain: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },

  vMain: {
    justifyContent: 'space-between',
    height: '100%',
    padding: 16,
  },

  // header
  vHeader: {},

  imgLogo: {
    height: 70,
    width: '100%',
  },

  tLoginLabel: {
    fontFamily: 'Averta-Semibold',
    fontSize: 24,
    color: '#121238',
    marginTop: 60,
    textAlign: 'center',
  },

  // form
  vForm: {
    marginTop: 24,
  },

  vUsername: {
    marginTop: 10,
  },

  vUsernameInput: {
    position: 'relative',
  },

  tiUsername: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    overflow: 'hidden',
    paddingLeft: 44,
    paddingRight: 16,
    color: '#828282',
    fontSize: 16,
    height: 48,
  },

  tiUsernameActive: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    overflow: 'hidden',
    paddingLeft: 44,
    paddingRight: 16,
    fontFamily: 'Averta-Semibold',
    color: '#292D32',
    fontSize: 16,
    height: 48,
  },

  icUsername: {
    position: 'absolute',
    top: 14,
    left: 12,
    width: 24,
    height: 24,
  },

  tErrorUsername: {
    color: '#e60000',
    marginTop: 4,
  },

  vPassword: {
    marginVertical: 30,
  },

  vPasswordInput: {
    position: 'relative',
  },

  tiPassword: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    overflow: 'hidden',
    paddingLeft: 46,
    paddingRight: 46,
    color: '#828282',
    fontSize: 16,
    height: 48,
  },

  tiPasswordActive: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    overflow: 'hidden',
    paddingLeft: 46,
    paddingRight: 46,
    fontFamily: 'Averta-Semibold',
    color: '#292D32',
    fontSize: 16,
    height: 48,
  },

  icPassword: {
    position: 'absolute',
    top: 13,
    left: 16,
    width: 24,
    height: 24,
  },

  toShowPassword: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

  imgIconShowPassword: {},

  tErrorPassword: {
    color: '#e60000',
    marginTop: 4,
  },

  vRememberLogin: {},

  imgIconRemember: {
    width: 24,
    height: 24,
  },

  toRememberLogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tRemember: {
    fontSize: 16,
    color: '#828282',
    marginLeft: 16,
  },

  toLogin: {
    backgroundColor: '#003679',
    height: 48,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  toWaitingLogin: {
    backgroundColor: '#003679',
    height: 48,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    opacity: 0.7,
  },

  tLogin: {
    fontFamily: 'Averta-Semibold',
    fontSize: 16,
    color: '#FFF',
  },

  // footer
  vFooter: {
    marginVertical: 40,
  },

  toForgotPassword: {
    marginTop: 48,
  },

  tForgotPassword: {
    fontSize: 16,
    color: '#8C429E',
  },

  tSupport: {
    fontSize: 17,
  },

  tSupportClick: {
    color: '#8C429E',
    textDecorationLine: 'underline',
    fontSize: 17,
    fontFamily: 'Averta-Semibold',
  },

  toRegister: {
    height: 48,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  tRegister: {
    fontFamily: 'Averta-Semibold',
    fontSize: 16,
    color: '#8C429E',
  },

  vFooterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.8,
    borderColor: '#E6E6E6',
    paddingTop: 20,
  },

  toContact: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgContact: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  tContact: {
    fontSize: 15,
    color: '#828282',
  },

  tVersion: {
    fontSize: 15,
    color: '#828282',
  },

  vLabelLoginOther: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },

  tLabelLoginOther: {
    marginHorizontal: 8,
    color: '#828282',
  },

  // modal error
  vModalError: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 30,
    alignItems: 'center',
  },

  imgIconModalError: {
    width: 70,
  },

  tContentModalError: {
    fontFamily: 'Averta-Semibold',
    color: '#292D32',
    fontSize: 16,
    marginTop: 14,
    textAlign: 'center',
  },

  toConfirmModalError: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#7A258E',
    marginTop: 36,
    width: '100%',
  },

  tConfirmModalError: {
    fontFamily: 'Averta-Semibold',
    color: '#FFF',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  ccStyleOther: {
    flex: 1,
    justifyContent: 'space-between',
  },

  toOtherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: '#828282',
    borderRadius: 4,
    justifyContent: 'center',
    paddingVertical: 6,
  },

  imgOtherItem: {
    marginRight: 4,
  },

  // modal no feature
  vModalNoFeature: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    alignItems: 'center',
  },

  tContentModalNoFeature: {
    fontFamily: 'Averta-Semibold',
    fontSize: 16,
    marginTop: 14,
  },

  toConfirmModalNoFeature: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginTop: 36,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },

  tConfirmModalNoFeature: {
    fontFamily: 'Averta-Semibold',
    fontSize: 16,
  },
});
