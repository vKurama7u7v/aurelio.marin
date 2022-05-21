import React from "react";
import { Link } from "react-router-dom";

import "./error404.styles.css";
export default function Error404(props) {
  const { showColor, onChangeColor } = props;
  return (
    <>
      <main className={`main__error404 ${onChangeColor()}`}>
        <section className="section section__error404">
          <div className="error404">
            <div className="content__error404">
              <h3>No se encontró la página</h3>
              <Link to="/index">Volver a Inicio</Link>
            </div>
            <div className="bg-error404">404</div>
          </div>
        </section>
      </main>
    </>
  );
}
