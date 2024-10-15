import axios from 'axios';
const URL= "https://tripadvisor-com1.p.rapidapi.com/restaurants/search";

const options = {

    params: {
    geoId: '1954828',
    units: 'miles',
    sortType: 'asc'
  },
  headers: {
    'x-rapidapi-key': '4c85a39110msh172e0f44cf58109p109d76jsna9e71a22f755',
    'x-rapidapi-host': 'tripadvisor-com1.p.rapidapi.com'
  }
};
const getPlacesData = async () => {
try {
	const response = await axios.get(URL,options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
export {getPlacesData};


