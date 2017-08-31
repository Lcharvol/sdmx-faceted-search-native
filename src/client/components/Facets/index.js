import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { compose, filter, map } from 'ramda';
import { CATEGORY, DIMENSION } from '../../dataflows';
import styles from './styleSheet';

const getFacetComponent = ({ type, buckets, name, value }) => {
  switch (type) {
    case CATEGORY:
      return <View style={styles.facets} />;
    case DIMENSION:
      return <View style={styles.facets} />;
    default:
      return <View style={styles.facets} />;
  }
};

const Facets = ({ facets }) => {
  const facetBoxes = compose(filter(x => x), map(getFacetComponent()))(facets);
  return (
    <View>{facetBoxes}</View>
  );
};

Facets.propTypes = {
  facets: PropTypes.array,
};

Facets.defaultProps = {
  facets: {},
}

export default Facets;