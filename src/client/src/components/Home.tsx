import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="di">
        <h1>Hello</h1>
        <button
          onClick={() => {
            navigate("/test");
          }}
        >
          Go to Test
        </button>
      </div>
    </>
  );
}
export default Home;
