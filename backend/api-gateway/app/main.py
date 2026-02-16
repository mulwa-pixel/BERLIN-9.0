from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="BERLIN 9.0 API", version="9.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "name": "BERLIN 9.0 API",
        "version": "9.0.0",
        "status": "operational",
        "endpoints": {
            "health": "/health",
            "docs": "/docs",
            "trading": "/api/v1/trading",
            "analytics": "/api/v1/analytics",
            "signals": "/api/v1/signals"
        }
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "berlin-api", "timestamp": "2024-01-01T00:00:00Z"}

@app.get("/api/v1/trading/status")
async def trading_status():
    return {"status": "operational", "message": "Trading service ready", "markets": ["R_10", "R_25", "R_50", "R_75", "R_100"]}

@app.get("/api/v1/signals/{symbol}")
async def get_signal(symbol: str):
    return {
        "symbol": symbol,
        "timestamp": "2024-01-01T00:00:00Z",
        "signal": "CALL",
        "confidence": 0.85,
        "models": {
            "neural_network": {"prediction": "CALL", "confidence": 0.88},
            "random_forest": {"prediction": "CALL", "confidence": 0.82},
            "xgboost": {"prediction": "CALL", "confidence": 0.86}
        }
    }
