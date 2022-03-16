import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [coinsM, setCoinsM] = useState(0);
  const [changeM, setChangeM] = useState(0);
  const [coins, setCoins] = useState([]);
  const inputM = (event) => {
    setMoney(event.target.value);
  };
  const changeMoney = () => {
    if(coinsM === 0 || money === 0){
      alert('select coin or input money plz !');
    }else{
      setChangeM( () => money / coinsM);
    }
  };
  const selectChange = (event) =>{
    setCoinsM(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>coin list</h1>
      <input onChange={inputM} type="number" min="1" placeholder="my money ex) 20"></input> USD
      <br/>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectChange}>
          <option value={""}> select plz.. </option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br/>
      <button onClick={changeMoney}>change coin</button>
      {changeM === 0 ? "" : <h1>change coin : {changeM} </h1>}
    </div>
  );
}
export default App;