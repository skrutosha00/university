import { ContextProvider } from "Context";
import Router from "Router";

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;
