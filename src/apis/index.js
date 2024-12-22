export const fetchData = async (url) => {
  const response = await fetch(url, {
    method: "GET",
  });

  return await response.json();
};
