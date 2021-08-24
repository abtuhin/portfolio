import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      var title = this.props.data.title;
      var features = this.props.data.features;
      var description = this.props.data.description;
      var url = this.props.data.url;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-12 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description">{description}</p>
            <span className="feature">
              {features && features.map((item, i) => {
                return <li className="feature-item" key={i}>{item}</li>;
              })}
            </span>
            <div className="col-md-12 text-center modal-icon">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
          
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
