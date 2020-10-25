import { HomeTypes } from './types';

// UPDATE
export const updateTransitionSpeed = data => {
  return { type: HomeTypes.UPDATE_TRANSITION_SPEED.ROOT, payload: data };
};
export const updateTransitionSpeedLoading = () => {
  return { type: HomeTypes.UPDATE_TRANSITION_SPEED.LOADING };
};
export const updateTransitionSpeedSuccess = payload => {
  return { type: HomeTypes.UPDATE_TRANSITION_SPEED.SUCCESS, payload };
};
export const updateTransitionSpeedError = payload => {
  return { type: HomeTypes.UPDATE_TRANSITION_SPEED.ERROR, payload };
};
export const updatePosition = data => {
  return { type: HomeTypes.UPDATE_POSITION.ROOT, payload: data };
};
export const updatePositionLoading = () => {
  return { type: HomeTypes.UPDATE_POSITION.LOADING };
};
export const updatePositionSuccess = payload => {
  return { type: HomeTypes.UPDATE_POSITION.SUCCESS, payload };
};
export const updatePositionError = payload => {
  return { type: HomeTypes.UPDATE_POSITION.ERROR, payload };
};
