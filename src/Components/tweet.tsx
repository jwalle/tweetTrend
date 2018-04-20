import * as React from "react";
import * as reactReplace from "react-string-replace";
const tweet = require("../data.json");
const imgUrl = "https://img.youtube.com/vi/1JtBxL7MKKo/mqdefault.jpg";

interface TweetProps {
  name: string;
}

export default class Tweet extends React.Component<TweetProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const htag = tweet.entities.hashtags[0].text;
    const text = reactReplace(tweet.text, htag, (match: string, i: number) => (
      <span key={i} style={{ color: "red" }}>
        {match}
      </span>
    ));
    return (
      <div className="tweet">
        <div className="user">
          <img src="http://via.placeholder.com/300" height="42" width="42" />
          <div className="topInfo">
            <p>
              {tweet.user.name} - @{tweet.user.screen_name}
            </p>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p>{text}</p>
          </div>
          <img src={imgUrl} height="130" width="100%" />
        </div>
      </div>
    );
  }
}
