import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="flex gap-2 sm:flex-row flex-col ">
        <Button className="animate-slideIn" variant="default" size="default">
          Create a new MuseVerse
        </Button>
        <Button className="animate-slideOut" variant="outline" size="default">
          Join a MuseVerse
        </Button>
      </div>
    </main>
  );
}
