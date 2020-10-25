import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { homeReducer } from 'containers/Home/reducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  log: true,
};

const combinedReducer = combineReducers({
  homeReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
