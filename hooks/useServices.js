import { useState, useEffect } from "react";
import { getServices } from "../components/databaseService";
export const useGetServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch data from firebase
        const data = await getServices();
        //alert(JSON.stringify(data));
        //set data to state
        setServices(data ? Object.values(data) : []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { services };
  /* useEffect(() => {
    getServices()
      .then((response) => {
        alert("Services retrievvvved");
        alert(JSON.stringify(response));
        setServices(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { services }; */
};
