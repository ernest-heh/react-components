import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary rounded>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>Add to Cart</Button>
      </div>
      <div>
        <Button secondary outline>
          Search
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Save
        </Button>
      </div>
    </div>
  );
}

export default App;
