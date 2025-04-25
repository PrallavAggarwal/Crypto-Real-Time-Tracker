import { useSelector, useDispatch } from "react-redux"
import { selectCoinPrice } from "../Redux/Slices/CryptoSlice"
import { useRef } from "react"
import { useEffect } from "react"
import { updatePrices } from "../Redux/Slices/CryptoSlice"

const SubDashboard = ({coinId}) => {

    const coin = useSelector(selectCoinPrice(coinId))
    const price = coin?.price
    const change1h = coin?.change1h
    const change24h = coin?.change24h
    const change7d = coin?.change7d
    const marketCap = coin?.marketCap
    const volume24h =  coin?.volume24h
    const circulatingSupply = coin?.circulatingSupply
    console.log(`value of price : ${price}`)
    console.log(`value of change1h : ${change1h}`)
    console.log(`value of change24h : ${change24h}`)
    console.log(`value of change7d : ${change7d}`)
    console.log(`value of marketCap : ${marketCap}`)
    console.log(`value of volume24h : ${volume24h}`)
    console.log(`value of circulatingSupply : ${circulatingSupply}`)


    const prevPriceRef = useRef(price);
    const prevChange1hRef = useRef(change1h)
    const prevChange24hRef = useRef(change24h)
    const prevChange7dRef = useRef(change7d)
    const prevVolume24hRef = useRef(volume24h)

    const dispatch = useDispatch()
    useEffect(() => {
        const interval = setInterval(() => 
        {
            dispatch(updatePrices())
        },
        3000)
    
        return () => clearInterval(interval)
    },[dispatch])


    useEffect(() => {
        if(price !== undefined)
        {
            prevPriceRef.current = price
        }
        if(change1h !== undefined)
        {
            prevChange1hRef.current = change1h
        }
        if(change24h !== undefined)
        {
            prevChange24hRef.current = change24h
        }
        if(change7d !== undefined)
        {
            prevChange7dRef.current = change7d
        }
        if(volume24h !== undefined)
        {
            prevVolume24hRef.current = volume24h
        }
    }, 
    [price, change1h, change24h, change7d, volume24h]);

    const prevPrice = prevPriceRef.current
    const prevChange1h = prevChange1hRef.current
    const prevChange24h = prevChange24hRef.current
    const prevChange7d = prevChange7dRef.current
    const prevVolume24h = prevVolume24hRef.current


    const colorClassPrice =
    price > prevPrice
      ? "text-green-500"
      : price < prevPrice
      ? "text-red-500"
      : "text-gray-400";

      const colorClassChange1h =
      change1h > prevChange1h
        ? "text-green-500"
        : price < prevPrice
        ? "text-red-500"
        : "text-gray-400";

        // const colorClassChange1h =change1h > prevChange1h
        // ? "text-green-500"
        // : price < prevPrice
        // ? "text-red-500"
        // : "text-gray-800";


    const colorClassChange24h = 
    change24h > prevChange24h
        ? "text-green-500"
        : price < prevPrice
        ? "text-red-500"
        : "text-gray-400";

    const colorClassChange7d = 
    change7d > prevChange7d
        ? "text-green-500"
        : price < prevPrice
        ? "text-red-500"
        : "text-gray-400";


        const colorClassVolume24h = 
        volume24h > prevVolume24h
            ? "text-green-500"
            : volume24h < prevVolume24h
            ? "text-red-500"
            : "text-gray-400";


    return (
        <div className="grid grid-cols-11 gap-x-9 overflow-auto">
            <div>٭</div>
            <div className="text-white font-semibold">{coin.id}</div>
            <div className="text-white font-semibold"><img src={coin.logo} alt="" />{coin.name} <span className="text-gray-400">{coin.symbol}</span></div>
            <div className={`${colorClassPrice} font-semibold`}>{price}</div>
            <div className={`${colorClassChange1h} font-semibold`}>{change1h}</div>
            <div className={`${colorClassChange24h} font-semibold`}>{change24h}</div>
            <div className={`${colorClassChange7d} font-semibold`}>{change7d}</div>
            <div className="font-semibold">{marketCap}</div>
            <div className={`${colorClassVolume24h} font-semibold`}>{volume24h}</div>
            <div className="font-semibold">{circulatingSupply}</div>
            <div><img src='noBgGreenChart.png' alt="" width={`50px`} height={`50px`}/></div>
        </div>
    )
}

export default SubDashboard