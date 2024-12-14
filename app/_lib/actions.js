"use server";

import { signIn, signOut } from "./auth";

// import signIn

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
