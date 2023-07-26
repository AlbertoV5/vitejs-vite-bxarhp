import './globals.css';
import './themes/green.css';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function App() {
  const themes = ['default', 'green'];
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  return (
    <div className="flex flex-col w-[400px] justify-center m-auto min-h-screen">
      <div className="fixed bottom-2 left-0 w-full flex justify-center gap-2">
        {themes.map((theme) => (
          <div
            key={theme}
            onClick={() => {
              document.documentElement.classList.remove(activeTheme);
              document.documentElement.classList.add(theme);

              setActiveTheme(theme);
            }}
            className={cn(
              'px-3 py-2 text-neutral-950 bg-slate-100 rounded cursor-pointer',
              activeTheme == theme ? 'bg-indigo-200 text-indigo-800' : ''
            )}
          >
            {theme}
          </div>
        ))}
      </div>
      <TabsDemo />
    </div>
  );
}

export default App;
