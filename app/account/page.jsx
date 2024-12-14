import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Account() {
  const session = await auth();
  // console.log(session);
  const firstName = session.user.name.split(" ")[0];

  return (
    <div>
      <h1>Hello {firstName}</h1>
    </div>
  );
}
