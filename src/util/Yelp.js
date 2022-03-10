const apiKey = 'bOI66iQnn8KiNIlul0MVb8iZpj1IQsFuehs-TXVIbV644gaXFk0RTxcRjhdOwMco_Td0ZTcRRsoN-kFzRB6UWur6foGrPdfHcRPtt5tpt9tC-Yjh4BAnBEYj1twpYnYx';

const Yelp = {
    
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            const jsonResponse = response.json();
            return jsonResponse;
        }).then((jsonResponse) => {
            if (jsonResponse.businesses){
                const array = jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
                return array;
            }
        });

    }
}

export default Yelp;