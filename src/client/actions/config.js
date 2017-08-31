import { requestJson } from '../utils';
import { equals, find, propOr } from 'ramda';

export const CONFIGLOADED = 'CONFIGLOADED';
export const configLoaded = ({ facets }) =>
  ({ type: CONFIGLOADED, facets});

export const loadConfig = () => (dispatch, getState) => requestJson({ method: 'get', url: '/api/config' })
.then((config) => {
  dispatch(configLoaded(config));
})
.catch(() => dispatch(alert('Cannot load config')));