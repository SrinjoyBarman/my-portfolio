"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeIcon() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setLoading(false);
  }, []);

  const isDarkTheme = theme === "dark";

  if (!!mounted || !loading) {
    return (
      <>
        {isDarkTheme ? (
          <SunIcon
            onClick={() => {
              setTheme("light");
            }}
            className="hover:bg-primary/50 rounded-full p-1"
            size={30}
          />
        ) : (
          <MoonIcon
            onClick={() => {
              setTheme("dark");
            }}
            className="hover:bg-slate-200 rounded-full p-1"
            size={30}
          />
        )}
      </>
    );
  }
}
