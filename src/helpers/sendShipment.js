import axios from "axios";
import { CONFIG, CREATE_SHIPMENT_ENDPOINT, CREATE_SHIPMENT_PAYLOAD, MOCK_RESULTS_ENDPOINT } from "../constants/CreateShipmentPayload";


export const createShipmentService = async () => {
    /*const resp = await axios.post(CREATE_SHIPMENT_ENDPOINT, CREATE_SHIPMENT_PAYLOAD, CONFIG);
    const { data, included } = await resp.data;*/
    const { data, included } = await MOCK_RESULTS_ENDPOINT;
    return included.filter(include => include.type === 'rates');
}