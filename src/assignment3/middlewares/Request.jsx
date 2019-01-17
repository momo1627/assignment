import axios from 'axios'
import getRandomNumber from './getRandomNumber';
const appKey = '7e2e867887109e6943b6aaa27f04ff8f';
async function GetPhotosId(input,number){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appKey}&tags=${input}&format=json&nojsoncallback=1`
    const response = await axios.get(url);
    const photoList = response.data.photos.photo;
    let result = [];
    for (let i = 0; i<number; i++){
        result.push(photoList[i].id)
    }
    return result;  
}

async function GetPhotosUrl(id){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${appKey}&photo_id=${id}&format=json&nojsoncallback=1`
    const response = await axios.get(url);
    const photoInfo = response.data.photo;
    const photo = {
        url:photoInfo.urls.url[0]._content,
        id:photoInfo.id,
    }
    return photo
    // console.log(photoInfo)
}
async function getPhotos(input,number){
    const ids = await GetPhotosId(input,number);
    let urls = [];
    ids.map(async (id)=>{const result = await GetPhotosUrl(id); urls.push(result)})
    return urls;
}

export default getPhotos