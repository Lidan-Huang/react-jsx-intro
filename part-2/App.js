import Tweet from "./Tweet";

/**Render at least three tweets
 * Props: none
 * States: none
 * App -> Tweet
 */

function App() {
  return (
    <div>
      <Tweet username="Cat" name="Meow" date={new Date().toDateString()} message="Hello!"/>
      <Tweet username="Dog" name="Woff" date={new Date().toDateString()} message="Hi!"/>
      <Tweet username="Butterfly" name="Fly" date={new Date().toDateString()} message="Hello!"/>
    </div>
  );
}

export default App;