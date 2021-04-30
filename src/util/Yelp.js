const apiKey =
  "o23bLAIwPzUA2XqRMBiZWfo_jRYzpDB-Q_x2HYbRexEEGwu2VfLhWt4gz0aPU8Z5zQylFcNHYnJWuX6QtIdtgFvoTN1dkRBui-A0f9MtZzTtzW2vlNwTwF0Qm8KDYHYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        }
    }).then(response) => {return response.json()}
    .then((jsonResponse) => {
        
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map((business)=>{
                return{
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                adress: business.location.adress,
                city: business.location.city,
                state: business.location.address1,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
                }})
        }
    })

}  
  
}


export default Yelp;