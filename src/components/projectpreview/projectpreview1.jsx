import './projectpreview.css';
import soldImg from "./img/sold.svg";

function ProjectPreview1() {
    return (
            <a className="projects__item projects-1" href="./projects/solivar/solivar.html">
                <p className="projects__item-title">S’Olivar</p>
                <p className="projects__item-subtitle">Port de Soller</p>
                <img className="projects__item-img" src={soldImg} alt=""/>
            </a>
    )
}

export default ProjectPreview1;