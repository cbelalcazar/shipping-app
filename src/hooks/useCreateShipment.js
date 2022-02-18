import { useEffect, useState } from "react";
import { createShipmentService } from "../helpers/sendShipment";


export const useCreateShipment = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        createShipmentService()
        .then(rates => {
            setState({
                data: rates,
                loading: false,
            })
        });
    }, []);

    return state;
}