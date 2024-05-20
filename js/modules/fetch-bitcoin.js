export default function initFetchBitcoin(){
 
  fetch('https://www.blockchain.com/ticker')
  .then(response=>response.json())
  .then(json=>{
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000/json.BRL.sell).toFixed(4);
    console.log(json.BRL.sell)
  }).catch(erro=>{
    console.log(Error(erro))
  })
}
