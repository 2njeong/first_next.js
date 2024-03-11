"use client";
import React, { useEffect, useState } from "react";

type Data = {
  fact: string;
  length: number;
};

const CSR = () => {
  const [data, setData] = useState<Data | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const fetchData = await response.json();

      setData(fetchData);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <p>fact: {data.fact}</p>
      <p>length: {data.length}</p>
    </>
  );
};

export default CSR;
