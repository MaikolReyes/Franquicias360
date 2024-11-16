import { itemsLinkedln } from '../resources'
import linkedin from '../assets/img/linkedin1.png'

export const Linkedin = () => {
    return (
        <>
            {/* Section of linkedin */}
            <div className="sectionLinkedin">
                <div className="d-flex align-items-center">
                    <img className="logoLinkedin" src={linkedin} alt="" />
                    <h2 className="textFranquiciasLinkedin">Franquicias360</h2>
                </div>
                <a href="https://www.linkedin.com/company/franquicias360/" target="blank_"><button className="botonLinkedin">SIGUENOS EN LINKEDIN</button></a>
            </div>

            <div className="mt-5 mb-5 d-flex justify-content-center">
                <div className="containerImageLinkedin">
                    {itemsLinkedln.map(({ url, image, id }) => (
                        <a target="blank_" key={id} href={url}><img className="imageLinkedin" src={image} alt="" /></a>
                    ))}
                </div>
            </div>
        </>
    )
}
