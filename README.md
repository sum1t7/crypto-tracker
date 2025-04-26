 # Crypto Price Tracker

A responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates.


## Features

- Real-time cryptocurrency price tracking with simulated WebSocket updates
- Responsive data table displaying 5 major cryptocurrencies 
- Color-coded price movements (green for positive, red for negative) 
- Automatic updates every 1.5 seconds


### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)


### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker
```

## Setup Instructions
2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```


### Building for Production
To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.


## Tech Stack

- **React 18**: Frontend library for building the user interface
- **Redux Toolkit**: State management with createSlice and configureStore
- **CSS3**: Responsive design using media queries
- **Mock WebSocket Service**: Custom simulation for real-time data updates

## Architecture

The application follows a clean architecture with clear separation of concerns:

### Component Structure
```
App
└── CryptoTable
    └── CryptoRow (multiple instances)
```

### Data Flow
```
Socket → Redux Store → React Components
```

## Project Implementation Details

> ### State Management

All application state is managed through Redux Toolkit:

- **CryptoSlice.js**: Defines the shape of the state and provides actions for updating cryptocurrency data
- **Selectors**: Optimized with createSelector for efficient component rendering

> ### WebSocket Simulation

The application uses a custom Socket that:
- Simulates real-time data updates using setInterval
- Randomly updates prices and metrics for 1-3 assets every 1.5 seconds
- Dispatches actions to the Redux store to update state

### Preview and Explaination Link
[VIDEO PREVIEW](https://drive.google.com/file/d/1zQJ4XzmdTa_HcfFJTdfEi27yIApNdwX6/view?usp=sharing)


## Acknowledgments

- Sample cryptocurrency data generated based on market information as of April 2025
- UI design inspired by popular cryptocurrency tracking websites

---
