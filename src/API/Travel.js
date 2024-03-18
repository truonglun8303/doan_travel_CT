import axiosclient  from "./AxiosClient";

const END_POINT = {
    TRAVEL: 'travel'
}
export const getTravelAPI = () =>{
    return axiosclient.get(`${END_POINT.TRAVEL}`);
}