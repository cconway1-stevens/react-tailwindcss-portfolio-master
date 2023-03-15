import React from "react";
import { Helmet } from "react-helmet";

class MyCal extends React.Component {
  componentDidMount() {
    window.onload = () => {
      const Calendly = window.Calendly;
      Calendly.initBadgeWidget({
        url: "https://calendly.com/cconway1/r-a-1-1-request",
        text: "Book a Meeting",
        color: "#5FB682",
        textColor: "#ffffff",
        branding: undefined,
      });
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        </Helmet>
        <div id="schedule-container"></div>
      </div>
    );
  }
}

export default MyCal;
