import {ActionType} from '../actions';
import {Crypto} from '../../types';
const initialAppState: {dataList: Crypto[]; fetchingLoading: boolean} = {
  dataList: [],
  fetchingLoading: false,
};

export default (
  state = initialAppState,
  {type, payload}: {type: string; payload?: any},
) => {
  switch (type) {
    case ActionType.DELETE_FROM_DATALIST: {
      const tempList = [...state.dataList];
      const foundAt = tempList.findIndex(itm => itm.data.symbol === payload);
      foundAt > -1 && tempList.splice(foundAt, 1);
      return {
        ...state,
        dataList: tempList,
      };
    }
    case ActionType.ADD_TO_DATALIST: {
      return {
        ...state,
        dataList: [...state.dataList, ...payload],
      };
    }
    case ActionType.ADD_TO_DATALIST_NEW: {
      return {
        ...state,
        dataList: payload,
      };
    }
    default:
      return state;
  }
};
