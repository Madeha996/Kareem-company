"use client";
import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import enMessages from "../../src/messages/en.json";
import arMessages from "../../src/messages/ar.json";

export const LocaleContext = React.createContext<{
  local: string;
  onChangeLang: (ln: string) => void;
  messages: Record<string, string>;
}>({ local: "en", onChangeLang: () => {}, messages: enMessages });

const LocalProvider = ({ children }: { children: ReactNode }) => {
  const [local, setLocal] = useState<string>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved) setLocal(saved);
  }, []);

  const onChangeLang = (ln: string) => {
    console.log(ln);
    setLocal(ln);
    localStorage.setItem("locale", ln);
  };

  const messages = local === "ar" ? arMessages : enMessages;

  return (
    <LocaleContext.Provider value={{ local, onChangeLang, messages }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocalProvider;
