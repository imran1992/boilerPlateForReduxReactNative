import {ActionType} from '../actions';
const initialUserState: {list: Array<string>} = {
  list: ['BTC'],
};

export default (
  state = initialUserState,
  {type, payload}: {type: string; payload?: any},
) => {
  switch (type) {
    case ActionType.CRYPTO_LIST: {
      return {
        ...state,
        list: [...state.list, payload],
      };
    }
    case ActionType.DELETE_FROM_DATALIST: {
      const tempList = [...state.list];
      const foundAt = tempList.findIndex(itm => itm === payload);
      foundAt > -1 && tempList.splice(foundAt, 1);
      return {
        ...state,
        list: tempList,
      };
    }

    default:
      return state;
  }
};
