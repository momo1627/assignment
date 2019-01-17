import axios from 'axios'
import getRandomNumber from './getRandomNumber';
const appKey = '6621bda7171c256dc7fdf8021af2af4d';
async function GetPhotosId(input,number){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appKey}&tags=${input}&format=json&nojsoncallback=1`
    const response = await axios.get(url);
    const photoList = response.data.photos.photo;
    let result = [];
    photoList.map((item,index)=>{result.push(item.id);if(index>=number){return false}})
    return result;
}
export default GetPhotosId