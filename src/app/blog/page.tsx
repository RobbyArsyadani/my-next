"use client";
import { useEffect, useState } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Blog() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const bgColor = scrollY < 300 ? "bg-white" : "bg-black text-white";
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10")
      .then((data) => data.json())
      .then((result) => setData(result));
  });
  return (
    <>
      <div className={` mt-3 transition-colors duration-500 ${bgColor} p-5`}>
        <main>
          <div className="flex gap-y-3 flex-col">
            {data.map((datas) => (
              <>
                <div key={datas.userId}>
                  <h1 className="title font-bold text-4xl">{datas.title}</h1>
                  <p>{datas.body}</p>
                </div>
              </>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
