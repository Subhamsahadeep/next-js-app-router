type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function sitemap() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json : Post[] = await response.json();
    
    const posts = json.map(post => {
        return {
            url: `http://localhost:3000/post/${post.id}`,
            lastModified: new Date().toISOString(),
        }
    })

    const routes = ['','/blog','/login','/logout'].map((route) => ({
        url: `http://localhost:3000${route}`,
        lastModified: new Date().toISOString(),
    }))
    
    return [...routes, ...posts]
}