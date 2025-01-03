import './projectpreview.css';
import soldImg from "./img/sold.svg";

function ProjectPreview2() {
    return (
            <a className="projects__item projects-2" href="./projects/boho-corner/boho-corner.html">
                <p className="projects__item-title">Boho Corner</p>
                <p className="projects__item-subtitle">Palma, El Terreno</p>
                <img className="projects__item-img" src={soldImg} alt=""/>
            </a>
    )
}

export default ProjectPreview2;