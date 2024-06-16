"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Footer() {
  useEffect(() => {
    ScrollReveal().reveal("footer");
  });
  return (
    <>
      <div className="footer">
        <p>
          {" "}
          &copy; Copyright <span className="font-bold">
            By Robby Arsyadani
          </span>{" "}
          hahabalabalbal
        </p>
      </div>
    </>
  );
}
