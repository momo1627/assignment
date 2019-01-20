import axios from 'axios'
import getRandomNumber from './getRandomNumber';
const appKey = '453804891ddd4242409e4c27e9630957';
async function GetPhotosId(input,number){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appKey}&tags=${input}&format=json&nojsoncallback=1`
    const response = await axios.get(url);
    const photoList = response.data.photos.photo;
    let result = [];
    for (let i = 0; i<number; i++){
        const info = {
            id:photoList[i].id,
            farm:photoList[i].farm,
            server:photoList[i].server,
            secret:photoList[i].secret
        }
        result.push(info)
    }
    return result;  
}

async function getPhotos(input,number,size){
    const photoInfos = await GetPhotosId(input,number);
    let urls = [];
    photoInfos.map(info=>{
        const url = `https://farm${info.farm}.staticflickr.com/${info.server}/${info.id}_${info.secret}_${size}.jpg`
        urls.push(url);
    })
    return urls
}

export default getPhotos