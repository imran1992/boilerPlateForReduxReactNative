// #region Redux action Types Constants
const FETCHING_LOADING = 'FETCHING_LOADING',
  ADD_TO_DATALIST = 'ADD_TO_DATALIST',
  CRYPTO_LIST = 'CRYPTO_LIST',
  ADD_TO_DATALIST_NEW = 'ADD_TO_DATALIST_NEW',
  DELETE_FROM_DATALIST = 'DELETE_FROM_DATALIST';
// #endregion

// #region Redux dispatchers
const addMyCrypto =
  (payload: {cypto: string; apiResult: any}) => (dispatch: Function) => {
    dispatch({type: CRYPTO_LIST, payload: payload.cypto});
    dispatch({type: ADD_TO_DATALIST, payload: [payload.apiResult]});
  };
const updateDataList = (payload: any) => (dispatch: Function) => {
  dispatch({type: ADD_TO_DATALIST_NEW, payload});
};
const deleteCrypto = (payload: string) => (dispatch: Function) => {
  dispatch({type: DELETE_FROM_DATALIST, payload});
};
// #endregion

// #region Redux dispatchers & Types Constants  Exporter
const ActionType = {
  FETCHING_LOADING,
  ADD_TO_DATALIST,
  CRYPTO_LIST,
  ADD_TO_DATALIST_NEW,
  DELETE_FROM_DATALIST,
};
export {ActionType, addMyCrypto, updateDataList, deleteCrypto};
// #endregion
