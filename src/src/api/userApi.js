import client from './client'


export  const getCurrentUser = async () => {
    const response =  await client.get('/user') 
    return response.data
}



export  const setCurrentUserLocation = async (lng , lat) => {
    const response = await client.post('/user/location' , {lng , lat} )
    console.log(response)
    
}
