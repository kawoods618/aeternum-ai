#!/bin/bash

# Start Flask backend on port 3000
python3 main.py &

# Start React frontend on port 5173
cd aeternum-frontend
npm install
npm run dev -- --host 0.0.0.0 --port 5173
