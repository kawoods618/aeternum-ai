from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf
import datetime

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "✅ Aeternum AI is running! Use /analyze?ticker=AAPL to get stock analysis."})

@app.route('/analyze', methods=['GET'])
def analyze():
    ticker = request.args.get('ticker', '').upper()
    if not ticker:
        return jsonify({"error": "❌ No ticker provided"}), 400

    stock = yf.Ticker(ticker)
    hist_df = stock.history(period="3y")
    if hist_df.empty:
        return jsonify({"error": f"❌ Market data for {ticker} is unavailable."})

    today = datetime.datetime.today().strftime("%Y-%m-%d")
    current_price = hist_df["Close"].iloc[-1]

    return jsonify({
        "ticker": ticker,
        "current_price": current_price,
        "date": today
    })

if __name__ == "__main__":
    print("🔥 Aeternum AI Backend is starting...")
    app.run(host="0.0.0.0", port=3000, debug=True)
