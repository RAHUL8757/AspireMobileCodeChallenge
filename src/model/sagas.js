import {all} from 'redux-saga/effects';
import {watchCardDetail} from './cardDetail-model/cardDetail.sagas';
export default function* rootSaga() {
  yield all([watchCardDetail()]);
}
