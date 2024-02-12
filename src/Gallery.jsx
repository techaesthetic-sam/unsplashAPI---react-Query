import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const url =
  "https://api.unsplash.com/search/photos?client_id=ZgGvzcMS3pYDLS7mpb3aXRwrv6FBF9VOjfTmZuM9wUk&query=office";

export default function Gallery() {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  const results = response.data.results;
  //console.log(response);
  if (results.length < 1) {
    <section className="image-container">
      <h4>No results found....</h4>
    </section>;
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const imageUrl = item?.urls?.regular;
        return (
          <img
            src={imageUrl}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
}
