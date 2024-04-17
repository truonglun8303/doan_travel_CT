
import axiosclient  from "./AxiosClient";

const END_POINT = {
    TOUR: 'tour'
}

// export const getTravelAPI = () =>{
//     return axiosclient.get(`${END_POINT.TRAVEL}`);
// }

// Start Tour
export const getTourAPI = () =>{
    return axiosclient.get(`${END_POINT.TOUR}`);
}
export const addTourAPI = (tour) =>{
    return axiosclient.post(`${END_POINT.TOUR}`,tour);
}
