export default async function getUser({email}) {
    const result = await fetch(
        `http://localhost:5000/users/${email}`
    );

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    };

    return result.json();
};