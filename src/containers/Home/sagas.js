import { takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { HomeService } from './services';
import * as homeActions from './actions';
import { HomeTypes } from './types';

const service = new HomeService();

export function* updateTransitionSpeed(action) {
  try {
    yield put(homeActions.updateTransitionSpeedLoading());
    const result = service.updateTransitionSpeed(action.payload);
    yield put(homeActions.updateTransitionSpeedSuccess(result));
    toast.success('Updated Transition Speed Successfully!');
  } catch (ex) {
    yield put(homeActions.updateTransitionSpeedError(ex));
    toast.error('Updated Transition Speed Failed!');
  }
}
export function* updatePosition(action) {
  try {
    yield put(homeActions.updatePositionLoading());
    const result = service.updatePosition(action.payload);
    yield put(homeActions.updatePositionSuccess(result));
  } catch (ex) {
    yield put(homeActions.updatePositionError(ex));
  }
}
export function* watchHome() {
  yield takeLatest(
    HomeTypes.UPDATE_TRANSITION_SPEED.ROOT,
    updateTransitionSpeed,
  );
  yield takeLatest(HomeTypes.UPDATE_POSITION.ROOT, updatePosition);
}
