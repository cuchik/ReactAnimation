import get from 'lodash/get';

const selectData = (reducerKey, attrKey = '', defaultValue = []) => state => {
  const data =
    get(state, `${reducerKey}Reducer.${attrKey}.data`) || defaultValue;
  return data;
};
const selectLoading = (reducerKey, attrKey = '') => state => {
  return get(state, `${reducerKey}Reducer.${attrKey}.loading`);
};

export { selectData, selectLoading };
