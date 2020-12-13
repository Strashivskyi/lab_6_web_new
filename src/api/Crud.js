import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:5050/credit',
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getAllByFilters(title, bank_name, annualFee, introOffer, rewardsRateInPercent) {
    let url = `http://localhost:5050/credit?`;
    if (title !== undefined && title !== '') {
      url += `title=${title}&`;
    }
    if (bank_name !== undefined && bank_name !== '') {
        url += `bank_name=${bank_name}&`;
      }
    if (annualFee !== undefined) {
      url += `annualFee=${annualFee}&`;
    }
} if (introOffer !== undefined && introOffer !== '') {
    url += `introOffer=${introOffer}&`;
  }
    if (rewardsRateInPercent !== undefined) {
        url += `rewardsRateInPercent=${rewardsRateInPercent}&`;
      
    return (await http.get(url)).data;
}

export async function getOne(id) {
    let url = `http://localhost:5050/credit/${id}`;
    return (await http.get(url)).data;
}