export const revalidate = 6;

export const cache = 'force-cache';


export const callAPI = async () => {
   
    const response = await fetch('https://www.boredapi.com/api/activity', {
        cache: 'force-cache'
    });
    const json = await response.json();
    return json;
    
}
