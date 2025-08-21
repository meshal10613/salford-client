export default async function getFeatures({query}) {
    const result = await fetch(
        `http://localhost:5000/products?feature=${query}`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};