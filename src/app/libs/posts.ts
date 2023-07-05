export const getAllPostsAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next : {
            revalidate: 60
        }
    });
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        return undefined
    }
}  

export const getAllPostByIdAPI = async (id: number) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(url);
    const response = await fetch(url, {
        next : {
            revalidate: 60
        }
    });
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        return undefined
    }
}  