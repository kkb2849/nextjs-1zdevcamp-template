/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/l76eX6KCzxi
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';

export function NewMemory() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createMemory = async () => {
    // 여기에서 title과 content 상태를 사용하여 메모리를 생성합니다.
    // 예를 들어, API 요청을 보낼 수 있습니다.
    const res = await fetch(`/api/memories`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
    })
    if (!res.ok) {
      return {
      }
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new component</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter the title" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea className="min-h-[100px]" id="content" placeholder="Enter the content" value={content} onChange={e => setContent(e.target.value)} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={createMemory}>Save</Button>
      </CardFooter>
    </Card>
  );
}