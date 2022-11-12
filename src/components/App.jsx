import { Routes, Route } from "react-router";
import Home from "pages/Home";
import CurrencyExhange from "pages/CurrencyExhange";
import NavBar from "./NavBar";
import { getAllNames } from "api/api";
import { getPositionInfo } from "api/geo-api";
import { useState, useEffect } from "react";
import { setRates } from "../redux/slice";
import { useDispatch } from "react-redux";

export const App = () => {
  const [base, setBase] = useState('');
  const dispatch = useDispatch();

  window.navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const getPosition = async () => {
      try {
        const result = await getPositionInfo(lat, long);
        setBase(result)
      } catch (error) {
        setBase("USD")
      }
    }
    getPosition();
  }, () => {
    setBase("USD")
  });

  useEffect(() => {
      getAllNames()
        .then(result => {
        dispatch(setRates(result.symbols))
      })
      .catch(error => console.log("error", error))
  }, [dispatch]);
  
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home base={base} />} />
      <Route path="exchange" element={<CurrencyExhange base={base} />} />
      </Routes>
      </>
  );
};
