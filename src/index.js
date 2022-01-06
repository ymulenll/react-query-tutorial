import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import App from "./App";

// Create a client
const queryClient = new QueryClient()
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    , document.getElementById("root"));
