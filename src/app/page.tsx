"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button>
        Create User
      </Button>

    </div>
  );
}
