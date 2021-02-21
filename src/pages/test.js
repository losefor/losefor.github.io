import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
export default function test() {
    const fetch = async (url)=>{
        const response = await axios.get(url)
        return response.data
    }
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetch)
    return (
        <div>
          {!data ? "loading" : JSON.stringify(data) }
        </div>
    )
}
