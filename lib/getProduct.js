export default async function getProduct({id}) {
    const result = await fetch(
        `http://localhost:5000/products/${id}`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};