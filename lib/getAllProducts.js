export default async function getAllProducts() {
    const result = await fetch(
        `https://salford-server.vercel.app/products`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};