import { useEffect, useState } from "react";

export const useCodeforces = (handle) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://codeforces.com/api/user.info?handles=${handle}`
        );

        const json = await res.json();

        if (json.status !== "OK") {
          throw new Error("Failed to fetch Codeforces data");
        }

        setData(json.result[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [handle]);

  return { data, loading, error };
};