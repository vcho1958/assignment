import axios from "axios";

async function getStationsByPrice(price: number):Promise<string[]> {
	try {
		return await axios.get<[]>('https://test.oilnow.co.kr/gstations?price=' + price).then(res=>res.data)
	} catch {
		return []
	}
}

async function printStationList():Promise<void> {
	const res1 = await getStationsByPrice(1300)
	const res2 = await getStationsByPrice(1400)
	console.log(res1.concat(res2))
}

printStationList()
