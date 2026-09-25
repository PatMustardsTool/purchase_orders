import axios from 'axios'
import {env_client} from '@/config/env'

export const client = axios.create({
    baseURL: env_client.base_url,
    headers: env_client.headers
})