import { arrayValores } from '../resources'


export const Valores = () => {
    return (
        <>
            {/* Section of valor in the company */}
            <section className="textSectionValores">
                <h4 id='nosotros' className='textSubtitle'>Nuestros valores</h4>
                <h3 className="textTitle">¿Por qué elegirnos?</h3>
            </section>

            <div className="containerValores">
                {arrayValores.map(({ url, description, title, id }) => (
                    <div className="itemValores" key={id}>
                        <img className='iconValores' src={url} alt="" />
                        <div>
                            <h3 className='titleValores'>{title}</h3>
                            <p className='textValores'>{description}</p>
                        </div>
                    </div>
                ))};
            </div >
        </>
    )
}
