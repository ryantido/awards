"use client";

import { useRouter } from "next/router";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="grid place-items-center hdh">
      <h1>Something Went Wrong — Try to reload the page</h1>
      <p>{error.message}</p>
      <button onClick={() => useRouter().reload()}>Reload</button>
    </div>
  );
}
