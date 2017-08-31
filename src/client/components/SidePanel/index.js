import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Facets from '../Facets';
import styles from './styleSheet';

const SidePanel = ({ facets }) => (
  <View style={styles.sidePanel}>
    <Facets facets={facets} />
  </View>
);

SidePanel.propTypes = {
  facets: PropTypes.array,
};

export default SidePanel;