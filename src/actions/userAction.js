import { apiGetCall } from './indexAction';
import config from '../config';

export function test(payload) {
    
    let url = config.API.getInfo;
    let type = "TEST";
    return apiGetCall(type,url);
    
}