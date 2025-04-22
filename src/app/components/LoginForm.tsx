"use client";

import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LoginForm() {

  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <form>
      <label>
        Användarnamn:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
    </form>
  );
}

