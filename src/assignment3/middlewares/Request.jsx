import axios from 'axios'
import getRandomNumber from './getRandomNumber';
const appKey = '6621bda7171c256dc7fdf8021af2af4d';
async function GetPhotos(input,number){
    let url = `ttps://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appKey}&tags=${input}&format=json&nojsoncallback=1`
    const responsePhotoList = await axios.get(url);

}