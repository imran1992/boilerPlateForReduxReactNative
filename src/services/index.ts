import Axios from 'axios';

const getMetrics = (assetKey: string) => {
  const smallAssetKey = assetKey.toLocaleLowerCase();
  const request = `https://data.messari.io/api/v1/assets/${smallAssetKey}/metrics/market-data`;
  console.log('Test', request);
  return Axios.get(request)
    .then(({data, status}) => (status === 200 ? data : null))
    .catch(e => {
      console.log('Error', e);
      return null;
    });
};

export default {getMetrics};
