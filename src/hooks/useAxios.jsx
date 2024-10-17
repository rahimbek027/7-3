import axios from "axios";
import { URL } from "./useEnv";

export const useAxios = () => axios.create({baseURL:URL})
