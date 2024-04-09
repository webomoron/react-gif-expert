export const getGifs = async(q) => {
    const api_key = 'YsvzQAw6V4oJxKpDvEGViS3FcQliulI2'
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${limit}`
    
    const resp = await fetch(url)
    const { data } = await resp.json()

    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    
    return gifs
}