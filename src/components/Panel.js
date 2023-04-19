import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Panel({ children, className, ...rest }) {
  let finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  finalClassNames = twMerge(finalClassNames);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
