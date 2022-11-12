import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getCurrency } from "api/api";
import { List } from "@mui/material";

export default function Home({base}) {
  const rates = useSelector(state => state.rates);
  const names = Object.keys(rates).join(",");

  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    getCurrency(base, names)
      .then(response => setExchangeRates(response.rates))
    .catch(e => console.log(e))
  }, [base, names])
  
  return (
    <main>
      <List>
        {base && Object.entries(exchangeRates).map(item => 
          <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>
          )}
      </List>
    </main>
  )
}
