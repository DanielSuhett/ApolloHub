import React from "react";
import { useQuery } from "@apollo/client";
import { repoSearch } from "../services/graphql/queries";

export default function () {
  const { loading, error, data } = useQuery(repoSearch, {
    variables: {
      value: "jquery in:name,description",
    },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

	console.log(data);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
