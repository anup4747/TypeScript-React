import React from "react";
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type

// Function that never returns (throws an error)
function throwError(message: string): never {
  throw new Error(message);
}

// Function that accepts unknown type but needs type checking before using it
function printValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe to access string methods after type checking
  } else {
    console.log("Not a string!");
  }
}

const name: string = "Anup Tarwade";
const age: number = 20;
const isMarried: boolean = false;
const hobbies: string[] = ["Coding", "Reading", "Writing"];
const address: { street: string; city: string; state: string } = {
  street: "123, ABC Street",
  city: "Pune",
  state: "Maharashtra",
};

function App() {
  return (
    <div className="App">
      <h1>{name}, {age}, isMarried: {isMarried}</h1>
      
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      
      <p>
        Address: {address.street}, {address.city}, {address.state}
      </p>

      {/* Example of using throwError function */}
      <button onClick={() => throwError("Something went wrong!")}>Throw Error</button>

      {/* Example of using printValue function */}
      <button onClick={() => printValue(123)}>Print Value (Not a String)</button>
      <button onClick={() => printValue("Hello, world!")}>Print Value (String)</button>
    </div>
  );
}

export default App;
