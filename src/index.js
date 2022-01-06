import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./App";

// Create a client
const queryClient = new QueryClient()
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    , document.getElementById("root"));
