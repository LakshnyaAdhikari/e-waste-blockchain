# E-Waste Digital Tracking System

This project provides a practical solution for sustainable e-waste management by implementing a **blockchain-based digital passport system**.

##  Purpose

Tracks the full lifecycle of electronic devices from production to recycling in a tamper-proof and transparent way, solving key issues in e-waste management:
- Lack of transparency in tracking device journeys.
- No reliable proof of processing history.
- Trust issues in resale or recycling markets.

##  Features

- **Tamper-Proof Records**: Every device view or interaction is logged immutably on a simple blockchain.
- **Transparent Tracking**: Lifecycle visibility from waste collection → segregation → syngas processing.
- **Trust & Accountability**: Proof of purity levels and processing history builds trust.
- **Lightweight Prototype**: No complex mining or heavy wallets. Simple permissioned blockchain for fast, energy-efficient operation.

##  Setup Instructions

1. Install backend dependencies:
    ```bash
    npm install
    ```

2. Start the backend server:
    ```bash
    npm start
    ```

3. Serve the frontend files:
    ```bash
    cd frontend
    http-server
    ```

4. Open in browser:  
    ```
    http://localhost:8080/index.html
    ```

5. Select a device ID and click “Track Device” to see live data + blockchain log.

##  Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Blockchain**: Custom simple in-memory blockchain (JavaScript)
- **Serving Files**: http-server (npm package)
- **CORS Handling**: cors npm package

##  Future Scope

- Add device registration and other features via API.
- Expand blockchain with Proof-of-Work or smart contracts.
- Integrate with an actual recycling plant system.


