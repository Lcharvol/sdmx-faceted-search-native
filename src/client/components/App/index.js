import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getFacets } from '../../selectors';
import SidePanel from '../SidePanel';
import styles from './styleSheet';

const App = ({ facets }) => (
  <View style={styles.container}>
    <SidePanel
      facets={facets}
    />
  </View>
);

App.propTypes = {
  facets: PropTypes.array.isRequired,
}

const actions = {};

const mapStateToProps = state => ({
  facets: getFacets(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(App);
