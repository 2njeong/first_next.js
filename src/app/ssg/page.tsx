const SSG = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();

  return (
    <>
      <p>fact: {data.fact}</p>
      <p>length: {data.length}</p>
    </>
  );
};

export default SSG;
