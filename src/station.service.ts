import axios from "axios"

export default class StationService {

 public async printStationListByPrices(...prices: number[]): Promise<void> {
		const result = await Promise.all(prices.map(this.getStationsByPrice))
  console.log(result.flat())
	}

	private async getStationsByPrice(price: number):Promise<string[]> {
		try {
   const { data } = await axios.get<string[]>('https://test.oilnow.co.kr/gstations?price=' + price)
   return data
		} catch {
			return []
		}
	}

}