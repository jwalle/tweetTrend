import * as React from "react";
import Tweet from "./tweet";
// import TweetColHeader from "./tweetColHeader";
import axios from "axios";

const TWITTER_URL = "https://api.twitter.com/1.1/trends/place.json?id=1";
const tweet = require("../data.json");

interface TweetsColProps {
  name: string;
}

export default class TweetsCol extends React.Component<TweetsColProps, {}> {
  constructor(props: any) {
    super(props);

    this.getTrends = this.getTrends.bind(this);
  }

  componentWillMount() {
    //this.getTrends();
  }

  getTrends() {
    axios({
      method: "get",
      url: TWITTER_URL,
      responseType: "json"
    }).then((res: any) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="tweetCol">
        <Tweet name="plop" />
        <Tweet name="hkjhkj" />
        <Tweet name="plhkjhkjhop" />
        <Tweet name="plkjhkjop" />
        <Tweet name="plkjhjkop" />
      </div>
    );
  }
}

const tweetsStream = [
  {
    value: "all",
    text: "All"
  },
  {
    value: "articles",
    text: "Articles"
  },
  {
    value: "products",
    text: "Products"
  }
];
