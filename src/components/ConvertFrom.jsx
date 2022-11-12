import { useSelector } from "react-redux"
import { convert } from "api/api";

export default function ConvertFrom({setResult, base}) {
  const rates = useSelector(store => store.rates);

  const submitHandler = (e) => {
    e.preventDefault();
    const { from, amount } = e.target;
    convert(from.value, base, Number.parseInt(amount.value))
      .then(result => setResult(result.result))
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={submitHandler}>
      From
      <label htmlFor="from">
      <select name="from" id="">
          {Object.keys(rates).map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      </label>
      <p>{`to: ${base}`}</p>
      {/* <label htmlFor="to">
        To
        <select name="to" id="">
          {Object.keys(rates).map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      </label> */}
      <label htmlFor="amount">
        Amount
        <input type="number" name="amount" required/>
      </label>
      <button type="submit">Convert</button>
    </form>
  )
}
