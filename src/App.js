import React,{Component} from 'react';
import './App.css';
import Card from './components/Card/Card';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';
import Button from './components/Button/Button';

class App extends Component{

  state = {
    coinData:[],
    currentPage:1
  }

  loadMore = () => {
    let currentPage = this.state.currentPage;
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&sparkline=true&page="+currentPage+1)
    .then(response => {
          response.data.map(coin => {
            let coinData = {
              coinName:coin.name,
              symbol:coin.symbol,
              image:coin.image,
              currentPrice:coin.current_price,
              high24h:coin.high_24h,
              low24h:coin.low_24h,
              priceChange24h:coin.price_change_24h,
              priceChange24hPercentage:coin.price_change_percentage_24h,
              sparkline7Days:coin.sparkline_in_7d.price
            }
            this.setState((prevState) =>{
              return {coinData:[
                ...this.state.coinData,
                coinData
              ],currentPage:currentPage+1}
            })
          })
        })
        .catch(error => {
          console.log(error)
        });
  
  }

  componentDidMount() {
    console.log("ComponentDiDdMount Called")
    console.log("Current State = ",this.state)
          axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&sparkline=true&page="+this.state.currentPage)
                .then(response => {
                  response.data.map(coin => {
                    let coinData = {
                      coinName:coin.name,
                      symbol:coin.symbol,
                      image:coin.image,
                      currentPrice:coin.current_price,
                      high24h:coin.high_24h,
                      low24h:coin.low_24h,
                      priceChange24h:coin.price_change_24h,
                      priceChange24hPercentage:coin.price_change_percentage_24h,
                      sparkline7Days:coin.sparkline_in_7d.price
                    }
                    this.setState((prevState) =>{
                      return {coinData:[
                        ...this.state.coinData,
                        coinData
                      ]}
                    })
                  })
                })
                .catch(error => {
                  console.log(error)
                });
        }
  render() {
    let content = <Spinner/>
    if(this.state.coinData.length!==0) {
      content = <React.Fragment>
                  <h1>Crypto Stats</h1>
                <div className="cards-holder">
                {this.state.coinData? this.state.coinData.map(coin => {
                  return <Card {...coin} key={coin.symbol}/>
                }):null}
                </div>
                <div style={{textAlign:"center"}}>
                  <Button clicked={this.loadMore}>Load More</Button>
                </div> 
          </React.Fragment>
        
        
    }

    return (
      <React.Fragment>
         <div className="container">
        {content}
        </div>
       
        
      </React.Fragment>
      
    );
  } 
  
}

export default App;
