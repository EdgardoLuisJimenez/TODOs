import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { sincronizedItem, error, loading, item } = state;

  // Action creators
  const onError = (error) =>
    dispatch({ type: actionTypes.ERROR, payload: error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.SUCCESS, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.SINCRONIZE });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        onSuccess(parseItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  item: initialValue,
  loading: true,
  error: false,
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SINCRONIZE: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.SINCRONIZE]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };