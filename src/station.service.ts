import axios, { AxiosInstance } from "axios"
import { config } from "./config"

export default class StationService {
	private readonly apiClient:AxiosInstance
	constructor() {
		this.apiClient = axios.create({baseURL: config.API_URL})
	}
 public async printStationListByPrices(...prices: number[]): Promise<void> {
		const result = await Promise.all(prices.map(this.getStationsByPrice.bind(this)))
  console.log(result.flat())
	}

	private async getStationsByPrice(price: number):Promise<string[]> {
		try {
			const { data } = await this.apiClient.get<string[]>(`/gstations`,{params: {price}})
   return data
		} catch {
			return []
		}
	}

}