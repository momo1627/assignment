export default function getRandomNumber(total,number){
    let result = [];
    var i = 0
    while (i<number){
        let random_number = Math.random() * total;
        let number =  Math.floor(random_number);
        if (!result.includes(number)){
            result.push(number);
            i+=1;
        }
    }
    return result;
}
