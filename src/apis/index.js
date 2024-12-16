import { BACKEND_BASE_URL } from "./constants";

export const fetchPosts = async () => {
  const url = `${BACKEND_BASE_URL}/posts`;

  const response = await fetch(url, {
    method: "GET",
  });

  return await response.json();
};
