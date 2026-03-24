import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchApps = async () => {
      try {
        const res = await axios("/AppsData.json");

        // ⏳ 3 seconds delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        setApps(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
};

export default useApps;
