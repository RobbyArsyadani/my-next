import Image from "next/image";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=2");
  const result = await res.json();
  return result;
}

export default async function Product() {
  const data = await getData();
  console.log(data);

  return (
    <>
      {data.length > 0 &&
        data.map((datas: any) => (
          <>
            <div key={datas.id}>
              <Image alt="" src={datas.image} width={300} height={400} />
              <p>{datas.title}</p>
              <p>{datas.description}</p>
            </div>
          </>
        ))}
    </>
  );
}
