import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  return (
    <>
      <div className="di">
        <h1>Hello! This is Test</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home!
        </button>
      </div>
    </>
  );
}
export default Test;
