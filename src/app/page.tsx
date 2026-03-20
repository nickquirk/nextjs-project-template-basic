import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-50">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Next.js 16 Starter</h1>
        <p className="text-gray-500">Bleeding edge stack: React 19, Tailwind 4, TypeScript.</p>
      </div>
      
      <div className="flex gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Documentation</Button>
      </div>
    </main>
  );
}
