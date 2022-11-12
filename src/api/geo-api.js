import axios from "axios";

const API_KEY = "344bab406b854f3dbe1fa5dbb261664a";

export const getPositionInfo = async(lat, long) => {
    const URL_POSITION = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${API_KEY}&language=en`;
    const { data } = await axios.get(URL_POSITION);
    const isoCode = data.results[0].annotations.currency.iso_code;
    return isoCode;
}