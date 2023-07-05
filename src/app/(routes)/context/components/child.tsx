"use client";
import { ThemeContext } from "../../../components/context/context";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";

type Props = {};

export default function ChildContext({}: Props) {
  const {theme, toggle} = useContext(ThemeContext);
  return (
    <div>
      <div className={theme + " p-10"}>React Context Hook Child CONTEXT</div>
      <Button className="button rounded border-2 border-rose-500 p-3" onClick={toggle}> Toggle Color </Button>
    </div>
  );
}
