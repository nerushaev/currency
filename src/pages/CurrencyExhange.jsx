import ConvertFrom from "components/ConvertFrom"
import { useState } from "react"

export default function CurrencyExhange({base}) {
  const [result, setResult] = useState(0);
  return (
    <main>
      <ConvertFrom base={base} setResult={setResult} />
      {result !== 0 && <p>Result: {result.toFixed(2)}</p>}
    </main>
  )
}