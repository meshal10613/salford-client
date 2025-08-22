export default async function getUser({email}) {
    const result = await fetch(
        `https://salford-server.vercel.app/users/${email}`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};