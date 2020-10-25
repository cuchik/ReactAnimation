import { all, fork } from 'redux-saga/effects';
import { watchHome } from 'containers/Home/sagas';

export function* rootSaga() {
  yield all([fork(watchHome)]);
}
