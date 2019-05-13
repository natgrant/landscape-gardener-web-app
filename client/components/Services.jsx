import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchServices } from "../actions/index";
import ServiceDescription from "./ServiceDescription";

export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  // componentDidMount = () => {
  //   this.props.fetchServices();
  // };

  handleChange = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    console.log(this.props);
    let miao = ["test", "test", "test"];
    return (
      <div className="services-container has-text-centered">
        <h2 className="sub-header">Services</h2>
        <div className="columns is-desktop">
          {miao.map((service, i) => {
            return (
              <div key={i} className="column" onClick={this.handleChange}>
                <ServiceDescription
                  service={service}
                  isShowing={this.state.showModal}
                />
                <figure className="is-inline-block service-img">
                  <img
                    className="img-services-circular"
                    src="/images/lawn.jpg"
                  />
                  <h3 className="img-text">
                    <span>{service}</span>
                  </h3>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ services }) => {
  return {
    services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
