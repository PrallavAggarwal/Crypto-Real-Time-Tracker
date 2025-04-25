# 💹 Crypto Price Tracker

A **real-time crypto price tracker** built with **React** and **Redux Toolkit**, simulating live updates using `setInterval`. Inspired by platforms like CoinMarketCap, this app displays dynamic crypto data in a clean, responsive UI.

## 🚀 Features

- 📊 **Live Price Updates**: Simulates WebSocket behavior using `setInterval` every 3 seconds.
- 🔁 **Real-time % Change**: Updates `1h%`, `24h%`, `7d%`, and `24h Volume` with every tick.
- 🎨 **Color-coded Changes**: Green for positive, red for negative changes.
- ⚙️ **Optimized with Redux Toolkit**:
  - Centralized state management using `createSlice` & `configureStore`.
  - Selectors used with `useSelector` to prevent unnecessary re-renders.
- 🔍 **Clean Architecture**: Components structured for scalability and maintainability.

## 🛠️ Tech Stack

- **Frontend**:  
  - React  
  - Redux Toolkit  
  - Tailwind CSS (optional/styled manually if not used)

- **State Management**:  
  - Redux Toolkit (`createSlice`, `configureStore`)  
  - `useSelector` for optimized reads  
  - `useDispatch` for triggering updates  

- **Other Tools**:
  - `useEffect`, `useRef` for tracking previous prices  
  - Mock data to simulate live updates  
  - Functional components & hooks

## 🧠 Key Functionalities

- `updatePrices()` reducer:  
  - Updates `price`, `percent_change_1h`, `percent_change_24h`, `percent_change_7d`, and `volume_24h`.
  - All values are changed dynamically with small random variations.
  
- `useRef` to track and compare previous and current prices, enabling:
  - Color-coded price changes (🔼 Green / 🔽 Red / ⏺️ Neutral)

- `useSelector` custom selectors:  
  - Pull data for each coin individually to allow selective re-rendering of rows.

## 📂 Folder Structure

src
 |
 |-- main.jsx
 |-- index.css
 |-- App.jsx
 |-- App.css
 |-- Redux
 |      |
 |      |-- Slices
 |      |       |
 |      |       |--CryptoSlice.jsx
 |      |-- Store.jsx
 |-- MockData
 |      |
 |      |--MockData.jsx
 |-- Components
 |      |
 |      |--Dashboard.jsx
 |      |
 |      |--Heading.jsx
 |      |
 |      |--noBgGreenChart.png
 |      |
 |      |--SubDashboard.jsx
 |-- assets



## 🧪 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
```

### 2. Install Dependencies
npm install

### 3. Run the App
npm run dev

