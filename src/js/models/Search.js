import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
        //const proxy = 'https://api.edamam.com/search';
        const key = 'e2181316d033a8734144639082e21346';
        const app_Id = 'b309974a';

        try{
            // if api need key and proxy
           // const res = await axios(`https://api.edamam.com/search?key=${key}&q=${this.query}`);
            const res = await axios(`https://api.edamam.com/search?q=chicken&app_id=${app_Id}&app_key=${key}`);
           // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
            //const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error){
            alert(error);
        }
    }
}
