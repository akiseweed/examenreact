import React from 'react';
import Menu from './Menu';

const Agencia = () => {
    return (
        <div style={{ paddingTop: '85px'}}>
            <Menu/>
            <section class="py-4 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-8 col-md-6 d-flex align-items-center">
                        <div>
                            <h1 class="fw-light">Ubicanos en Google Maps</h1>
                            <p class="lead text-muted">Usted encontrara lo mejor de Lima en Cheraton Hotel & Convention Center,
                                miembros de Preferred Hotels & Resorts. Visite nuestra sede principa ubicada en Caserío Huaca de Piedra, 
                                Illimo - Lambayeque, Lambayeque, Illimo, Peru.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
                        <img src='img/global.png' alt='img' height="200"/>
                    </div>
                </div>
                <hr/>
            </section>

            <div className="container-fluid pb-4 pt-4 custom-bg-color">
    <div className="row">
        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
            <div className="py-3 text-center">
                <p className="text-white col-md-12 my-1 d-flex" style={{ fontSize: '0.8rem' }}>Nuestra ubicación</p>
                <h4 className="text-white col-md-12 my-1 d-flex" style={{ fontSize: '1.9rem', fontFamily: 'Bookman Old Style' }}>CÓMO LLEGAR</h4>
                <p className="text-white col-md-12 my-1 d-flex">Cheraton Convention Center</p>
                <p className="text-white">Caserío Huaca de Piedra Illimo - Lambayeque</p>
                <p className="text-white col-md-12 my-1 d-flex">Tel.: <u className="text-white"><strong>+51 926 951 731</strong></u></p>
                <p className="text-white col-md-12 my-1 d-flex pt-4"><strong>Horarios de atención:</strong></p>
                <p className="text-white my-1 d-flex">Lunes a Sábados : 8:00 am - 12:00am</p>
                <p className="text-white my-1 d-flex">Domingos: 8:00 am - 10:00am</p>

            </div>
        </div>
        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center" style={{ maxWidth: '550px' }}>
            <div className="col-lg-12 my-1 p-0 d-flex justify-content-center align-items-center" style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
                <iframe
                    title="mapa"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.77661896126298!2d-79.83850379969573!3d-6.467608031516854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904c9a7481b48bdd%3A0x917cac9f3522aff4!2sEcolodge%20Huaca%20de%20Piedra!5e0!3m2!1ses-419!2spe!4v1713155948121!5m2!1ses-419!2spe"
                    width="550"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    iwloc="near"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    </div>
</div>
            <script>
                AOS.init();
            </script>
        </div>
    );
};
export default Agencia;
