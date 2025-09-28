"use client";
import { LocaleContext } from "@/app/providers/LocalProvider";
import React, { useContext } from "react";

const Header = () => {
  const { onChangeLang, messages } = useContext(LocaleContext);
  return (
    <div>
      <ul>
        <li onClick={() => onChangeLang("ar")}>ar</li>
        <li onClick={() => onChangeLang("en")}>en</li>
      </ul>
      <div>{messages.home}</div>
    </div>
  );
};

export default Header;
