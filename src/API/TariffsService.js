import axios from "axios";
import config from "../config/config.json"

export default class TariffsService {
    static async update() {
        try {
            const response = await axios.post(config.url + "api/v1/update")
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async getLastUpdate() {
        try {
            const response = await axios.get(config.url + "api/v1/update")
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async getTariffs(updateId) {
        try {
            const response = await axios.get(config.url + "api/v1/tariff/" + updateId)
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}