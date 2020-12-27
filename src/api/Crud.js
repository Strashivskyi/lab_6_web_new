import axios from "axios";
export const http = axios.create({
    baseURL: 'http://localhost:5000/products',
    headers: {
        'Content-Type': 'application/json'
    }
  });

export async function getAllByFilters(bank_name, annualFee, rewardsRateInPercent) {
    let url = `http://localhost:5000/products?`;

    if (bank_name !== undefined && bank_name !== '') {
        url += `bank_name=${bank_name}&`;
      }
    if (annualFee !== undefined) {
      url += `annualFee=${annualFee}&`;
    }
    if (rewardsRateInPercent !== undefined) {
        url += `rewardsRateInPercent=${rewardsRateInPercent}&`;
    }
    return (await http.get(url)).data;
}

export async function getOne(id) {
    let url = `http://localhost:5000/products/${id}`;
    return (await http.get(url)).data;
}