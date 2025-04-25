import { createSlice } from "@reduxjs/toolkit";
import { mockCryptoData } from "../../MockData/MockData";

const updateVolume = (currentVolume) => {
    // Simulate volume change between -5% to +5%
    const randomPercent = +(Math.random() * 10 - 5).toFixed(2); // -5 to +5
    const newVolume = +(currentVolume * (1 + randomPercent / 100)).toFixed(2);
    return newVolume;
  };
  

export const CryptoSlice = createSlice({
    name: "CryptoDetail",
    initialState: {
        data: mockCryptoData,
    },
    reducers : {
        updatePrices: (state) => {
            state.data = state.data.map((coin) => ({
              ...coin,
              change7d: +(Math.random() * 4 - 2).toFixed(2),
              change24h: +(Math.random() * 4 - 2).toFixed(2),
              change1h: +(Math.random() * 4 - 2).toFixed(2),
              volume24h: updateVolume(coin.volume24h),
              price: +(coin.price * (0.95 + Math.random() * 0.1)).toFixed(2), // simulate fluctuation
            }));
          },
    }
})

//selectors
// export const selectCoinPrice = (id) => (state) => console.log('state', state , 'id ', id)
// export const selectCoinPrice = (id) => (state) => {
//     state.crypto.data.map((coin) => {
//         console.log('coin : ', coin.id, 'id : ', id, 'coin.price : ', coin.price)
//         if(coin.id === id){
//             return coin.price
//         }
//     })
// }
export const selectCoinPrice = (id) => (state) => {
    const coin = state.crypto.data.find((coin) => coin.id === id)
    console.log("coin : ", coin)
    return coin
}
export const {updatePrices} = CryptoSlice.actions
export default CryptoSlice.reducer