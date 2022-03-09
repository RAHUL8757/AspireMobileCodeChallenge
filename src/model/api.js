import apisauce from 'apisauce';
import { CARDDETAIL } from '../services/apiConstants';

export const compliance_api = apisauce.create({
  timeout: 15000,
});;

export const getCardDetail = () => {
  return compliance_api.get(CARDDETAIL);
};

