import { useState, useEffect } from "react";
import axios from "axios";

const useStatistics = () => {
  const [data, setData] = useState([]);
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/1aVVgmnOSw2SAe9ij9E8qyKelZ60xmlbTziNl-BaIyfs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAMpPJdAkOQjy1blTL67abpvGkDJ7_7qSk";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.values);
    });
  }, []);

  return { data };
};

export default useStatistics;
