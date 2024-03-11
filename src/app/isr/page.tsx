const ISR = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 5 },
  });
  const data = await response.json();
  return (
    <>
      <p>fact: {data.fact}</p>
      <p>length: {data.length}</p>
    </>
  );
};

export default ISR;
