// import { useDispatch, useSelector } from "react-redux"
// import { mockCryptoData } from "../MockData/MockData"
// import { useEffect, useState } from "react"
// import { updatePrices } from "../Redux/Slices/CryptoSlice"
// import Price from "./Price"
// import Change1h from "./Change1h"
import { useSelector } from "react-redux"
import SubDashboard from "./SubDashboard"

const Dashboard = () => {
    const {crypto} = useSelector(state => state)
    console.log(crypto.data)
    
    return (
        <div className="bg-purple-900 overflow-auto">
            <h1>Dashboard</h1>

            <div className="grid grid-cols-11 border text-white overflow-auto font-semibold gap-x-9">
                <div> </div>
                <div>#</div>
                <div>Name</div>
                <div>Price</div>
                <div>1h%</div>
                <div>24h%</div>
                <div>7d%</div>
                <div>Market Cap</div>
                <div>Volume(24h)</div>
                <div>Circulating Supply</div>
                <div>Last 7 Days</div>
            </div>
            <div className="flex flex-col gap-3 overflow-auto">

                {
                    crypto.data.map((coin, index) => (
                        <div className="flex flex-col gap-x-9 overflow-auto">
                            <SubDashboard key={index} coinId = {coin.id} />
                        </div>
                    )
                )
                }
            </div>
              

            

            
        </div>
    )
}

export default Dashboard