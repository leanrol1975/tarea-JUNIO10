import React from 'react'

function Nav  ( props ) { 

    let _desde = props.fechadesde;
    let _hasta = props.fechahasta;


            
        return (
            <div>
                <section className = "hero is-primary">
                    <div className = "hero-body">
                        <div className="container">
                            <h1 className="title">Hoteles</h1>
                            <h2 className="subtitle">
                             
                           
        desde el <strong>{_desde},</strong> hasta el <strong>{_hasta}</strong>




                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Nav;