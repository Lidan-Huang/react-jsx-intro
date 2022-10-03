/**
 * Show Tweet
 * props:
 *  - username of the user who wrote the message
 *  - name of the user who wrote the message
 *  - date of the message being tweeted
 *  - the message
 * states: none
 * App -> Tweet
 */

function Tweet ({username, name, date, message}) {
  return (
    <div>
      <p>{message}</p>
      <p>By {username} {name} at {date}.</p>
    </div>
  );
}

export default Tweet;