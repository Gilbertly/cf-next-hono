"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function Home() {
  const [input, setInput] = useState<string>('')
	const [response, setResponse] = useState<string>('Click button to fetch greeting');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await fetch(`/api/hello?q=${input}`)
		const data = (await res.json()) as { message: string; }
    setResponse(data?.message)
    setInput('')
  };


	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1 >CF Pages deployed!</h1>
			<h2 className='my-4'>{response}</h2>

      <form onSubmit={handleSubmit} className='flex items-center'>
        <Input type="name" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Name" />
        <Button type="submit">Fetch greeting</Button>
      </form>
		</main>
	);
}
