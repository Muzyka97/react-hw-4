import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pixabay.com/api", 
    params: {
        key:"27139987-59c34dc519bc5be818ef3b62e",
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12,
        total: 12,
        }
})
export const searchImage = async (q, page) =>{
    const {data} = await instance.get("/" ,{
        params: {
            q,
            page
        }
    });
return data;
}

