import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeIcon from "./ui/theme-icon";

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-row w-full fixed h-10 px-2">
      <span className="tracking-widest p-1 animate-blink text-xl">
        MUSEVERSE
      </span>
      <div className="flex items-center flex-row justify-center gap-4">
        <ThemeIcon />
        <Avatar className="w-7 h-7">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
