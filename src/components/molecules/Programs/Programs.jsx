import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import SectionHead from "../../atoms/SectionHead/SectionHead";
import { programs } from "../../../placeholderData";
import Card from "../../atoms/Card/Card";
import { Link } from "react-router-dom";
import "./Programs.css";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__head">
          <SectionHead icon={<FaCrown />} title="Programs" />

          <div className="programs__wrapper">
            {programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">
                    Learn More <AiFillCaretRight />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
