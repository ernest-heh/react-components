import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button>Buy Now</Button>
      </div>
      <div>
        <Button>Add to Cart</Button>
      </div>
      <div>
        <Button>Search</Button>
      </div>
      <div>
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default App;
