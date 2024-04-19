
async function getData() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ5ZDE4NWUxODRjYjdlZjE5Y2ViY2Q5YjQzYjEzMSIsInN1YiI6IjY1ODU4NjFmNzFmMDk1NTZkMzI0MjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PEST3EzTYAWsSYzzq0hWWnu-3UNF4AhXlkNDyPWGgSw",
        },
    };

    const response = await fetch( "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1a49d185e184cb7ef19cebcd9b43b131" , options )
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data", error));

    return response;
}

export default async function getMovies() {
    const data = await getData();
    console.log(data);
    return data;
    
}