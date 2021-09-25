import axios from "axios";
import React, { Component } from "react";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };
  }

  UNSAFE_componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://sierrawilliams.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
      })
      .catch((error) => {
        console.log("getPortfolioItem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

/*


*/
