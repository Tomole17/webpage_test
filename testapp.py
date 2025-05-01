import dash
from dash import html

# Create Dash app
app = dash.Dash(__name__)

# Define layout
app.layout = html.Div("Hello from Dash!")

# Run app on 0.0.0.0:10000 for Render compatibility
if __name__ == "__main__":
    app.run_server(host="0.0.0.0", port=10000)
