import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export default function Gallery() {
  const { searchTerm } = useGlobalContext();
  //console.log(searchTerm);
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  //console.log(response);
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
