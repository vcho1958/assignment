import axios from "axios";

async function getStationsByPrice(price:number) {
	return axios.get<[]>('https://test.oilnow.co.kr/gstations?price=' + price)
		.then(res=>res.data).catch(e=>[])
}

const list = getStationsByPrice(1300)
	.then(res1 => getStationsByPrice(1400).then(res2 => res1.concat(res2)))
	.then(console.log)
