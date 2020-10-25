import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectData } from 'store/root.selectors';
import * as homeActions from './actions';
import HomeComponent from './view';

const mapStateToProps = state => {
  return {
    transitionSpeed: selectData('home', 'transitionSpeed', 0)(state),
    storePosition: selectData('home', 'position', {})(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTransitionSpeed: bindActionCreators(
      homeActions.updateTransitionSpeed,
      dispatch,
    ),
    updatePosition: bindActionCreators(homeActions.updatePosition, dispatch),
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
