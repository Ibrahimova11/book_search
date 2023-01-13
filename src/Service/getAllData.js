import axios from "axios"
import { BASE_URL } from "../consts"

export const getData = (search) => {
  return axios.get(`${BASE_URL}/volumes?q=${search}&maxResults=30`)
}