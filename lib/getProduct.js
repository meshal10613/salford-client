export default async function getProduct({id}) {
    const result = await fetch(
        `https://salford-server.vercel.app/products/${id}`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};