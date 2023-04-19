import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-4">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
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
          <GoDatabase />
          Save
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
