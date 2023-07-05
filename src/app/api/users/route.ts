
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const mySearchParams = searchParams.get('id');
    console.log('get request');
    return new Response(JSON.stringify({id: mySearchParams}))
}

export async function POST(request: Request) {
    console.log('post request');
    let res = await request.json();
    return new Response(JSON.stringify({message: res}))
}