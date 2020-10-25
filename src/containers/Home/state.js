export class HomeState {
  transitionSpeed;

  position;

  constructor() {
    this.transitionSpeed = {
      loading: false,
      data: 100,
      error: null,
    };
    this.position = {
      loading: false,
      data: {},
      error: null,
    };
  }
}
