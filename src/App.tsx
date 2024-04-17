import { Suspense, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Home } from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <PropagateLoader color="#a0d468" size={25} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <PropagateLoader color="#a0d468" size={25} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
}

export default App;
