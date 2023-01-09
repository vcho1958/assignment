import axios from "axios";
function getStationsByPrice(price) {
	return axios.get<string[]>('https://test.oilnow.co.kr/gstations?price=' + price)
		.then(function (res) {
			// return station id list (example: ["A001", "A002"])
			return res;
		})
		.catch(function (err) {
			return [];
		})
}

var list = getStationsByPrice(1300)
	.then(function(res1){
		return getStationsByPrice(1400)
		.then(function(res2){
			return res1.concat(res2) 
		})
	});

console.log(list);
