import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={6} className="">
      <div className="proj-imgbx border border-light">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a className="btn btn-info mt-5 text-light" href={link} target="_blank">Click Me</a>

        </div>
      </div>
    </Col>
  )
}

export const Angular = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={12} md={12} >
      <div className="proj-imgbx border border-light d-block col-md-6 offset-md-3">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a className="btn btn-info mt-5 text-light" href={link} target="_blank">Click Me</a>

        </div>
      </div>
    </Col>
  )
}

export const More = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx border border-light" >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a className="btn btn-info mt-5 text-light" href={link} target="_blank">Click Me</a>

        </div>
      </div>
    </Col >
  )
}
