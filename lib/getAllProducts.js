export default async function getAllProducts() {
    const result = await fetch(
        `http://localhost:5000/products`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};