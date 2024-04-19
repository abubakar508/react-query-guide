"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, Loading, Error } from "@/Components";
import getMovies from "./api/getMovies";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], //Array structure according toTMDB documentation
  });
  
  if (isLoading) return <Loading />;
  if (isError) return <div>There was an Error!</div>;
  
  return (
    <div className=" flex flex-col items-center justify-center mx-auto">
      <h1 className=" p-5 text-black font-bold text-4xl">Popular Movies</h1>
      <small>Data fetched by tanstack query</small>
      <div className="grid md:grid-cols-4 gap-4 p-10">
        {data?.results?.map(
          (movie: { id: number; title: string; poster_path: string }) => {
            return (
              <Card
                key={"movie" + movie.id}
                title={movie.title}
                image={movie.poster_path}
              />
            );
          }
        )}
      </div>
    </div>
  )
}
