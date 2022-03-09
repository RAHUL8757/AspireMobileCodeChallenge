export const CARDDETAIL = 'CARDDETAIL';
export const CARDDETAIL_SUCCESS = 'CARDDETAIL_SUCCESS';
export const CARDDETAIL_FAIL = 'CARDDETAIL_FAIL';

export const cardDetailRequest = () => {
  return {type: CARDDETAIL, payload: {}};
};
export const cardDetailSuccess = (data) => {
  return {type: CARDDETAIL_SUCCESS, payload: data};
};
export const cardDetailFail = (err) => {
  return {type: CARDDETAIL_FAIL, payload: {err}};
};