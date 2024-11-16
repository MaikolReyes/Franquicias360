import { itemsFranquicias } from '../resources'


export const Franquicias = () => {
    return (
        <div>
            {/* Section of franquicies */}
            <section id="franquicias" >
                <h4 className="textTitle mx-auto">Franquicias</h4>
                <h3 className="textTitleFranquicias mx-auto mt-0 mb-5">que trabajan con nosotros</h3>
            </section >

            <div className="containerImageFranquicias">
                {itemsFranquicias.map(({ id, url, logo }) => (
                    <div className="containerImage" key={id}>
                        <img className="imageFranquicias" src={url} alt="" />
                        <img className="logoFranquicia" src={logo} alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
}
