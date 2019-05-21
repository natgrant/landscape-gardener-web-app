import React from "react";

import useFetch from "../helpers/useFetch";

export default function Projects() {
  const data = useFetch("/api/v1/gardens");
  console.log(data);
  return (
    <div>
      <p>projects page</p>
    </div>
  );
}
