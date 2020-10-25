/* eslint-disable no-case-declarations */
import { HomeState } from './state';
import { HomeTypes } from './types';

const initialHomeState = new HomeState();

export const homeReducer = (state = initialHomeState, action) => {
  switch (action.type) {
    // UPDATE
    // UPDATE_TRANSITION_SPEED
    case HomeTypes.UPDATE_TRANSITION_SPEED.LOADING:
      return {
        ...state,
        transitionSpeed: {
          ...state.transitionSpeed,
          loading: true,
          error: null,
        },
      };
    case HomeTypes.UPDATE_TRANSITION_SPEED.SUCCESS:
      return {
        ...state,
        transitionSpeed: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case HomeTypes.UPDATE_TRANSITION_SPEED.ERROR:
      return {
        ...state,
        transitionSpeed: {
          data: 100,
          loading: false,
          error: action.payload,
        },
      };
    // UPDATE_POSITION
    case HomeTypes.UPDATE_POSITION.LOADING:
      return {
        ...state,
        position: {
          ...state.position,
          loading: true,
          error: null,
        },
      };
    case HomeTypes.UPDATE_POSITION.SUCCESS:
      return {
        ...state,
        position: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case HomeTypes.UPDATE_POSITION.ERROR:
      return {
        ...state,
        position: {
          data: {},
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
