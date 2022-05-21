import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BG from "../../../assets/bg-cv.png";
import Photo from "../../../assets/photo.png";
import "./portfolio.styles.css";
export default function Portfolio(props) {
  const { showColor, onChangeColor } = props;
  return (
    <>
      <Helmet title="Portafolio" />
      <main className={`main__portfolio ${onChangeColor()}`}>
        <section className="min-height">
          <section className="banner">
            <div className="cover__img-bg">
              <img
                src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                alt=""
                width={"100px"}
              />
            </div>

            <div className="cont__banner">
              <div className="flex-align-middle">
                <div className="content">
                  <h1>Mi Portafilio</h1>
                  <div className="links">
                    <Link to="/index">Home</Link>
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to="/portfolio" className="link-active">
                      Portafolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="projects__wrapper">
            <div className="left">
              <div className="post__item-wrapper">
                <div className="post__item">
                  <div className="post__img">
                    <img
                      src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                      alt=""
                      width={"100px"}
                    />
                  </div>
                  <div className="post__content">
                    <div className="content__top">
                      <div className="category">Categoria</div>
                      <div className="date">12 Agosto, 2022</div>
                    </div>
                    <div className="title__content">
                      <Link className="title">Titulo Proyecto</Link>
                    </div>

                    <p className="description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero, est maiores et adipisci blanditiis fugit ipsam?
                      Explicabo fugiat voluptates, dolor veniam facilis in
                      numquam aperiam totam nobis repellendus? Repudiandae,
                      odit.
                    </p>
                  </div>

                  <div className="post__footer">
                    <div className="footer__left">
                      <Link className="view-more">
                        Ver Más <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                    <div className="footer__right">
                      Share:
                      <button className="reset btn-share">
                        <i class="fa-brands fa-facebook-f"></i>
                      </button>
                      <button className="reset btn-share">
                        <i class="fa-brands fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="post__item">
                  <div className="post__img">
                    <img
                      src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                      alt=""
                      width={"100px"}
                    />
                  </div>
                  <div className="post__content">
                    <div className="content__top">
                      <div className="category">Categoria</div>
                      <div className="date">12 Agosto, 2022</div>
                    </div>
                    <div className="title__content">
                      <Link className="title">Titulo Proyecto</Link>
                    </div>

                    <p className="description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero, est maiores et adipisci blanditiis fugit ipsam?
                      Explicabo fugiat voluptates, dolor veniam facilis in
                      numquam aperiam totam nobis repellendus? Repudiandae,
                      odit.
                    </p>
                  </div>

                  <div className="post__footer">
                    <div className="footer__left">
                      <Link className="view-more">
                        Ver Más <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                    <div className="footer__right">
                      Share:
                      <button className="reset btn-share">
                        <i class="fa-brands fa-facebook-f"></i>
                      </button>
                      <button className="reset btn-share">
                        <i class="fa-brands fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="post__item">
                  <div className="post__img">
                    <img
                      src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                      alt=""
                      width={"100px"}
                    />
                  </div>
                  <div className="post__content">
                    <div className="content__top">
                      <div className="category">Categoria</div>
                      <div className="date">12 Agosto, 2022</div>
                    </div>
                    <div className="title__content">
                      <Link className="title">Titulo Proyecto</Link>
                    </div>

                    <p className="description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero, est maiores et adipisci blanditiis fugit ipsam?
                      Explicabo fugiat voluptates, dolor veniam facilis in
                      numquam aperiam totam nobis repellendus? Repudiandae,
                      odit.
                    </p>
                  </div>

                  <div className="post__footer">
                    <div className="footer__left">
                      <Link className="view-more">
                        Ver Más <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                    <div className="footer__right">
                      Share:
                      <button className="reset btn-share">
                        <i class="fa-brands fa-facebook-f"></i>
                      </button>
                      <button className="reset btn-share">
                        <i class="fa-brands fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="post__item">
                  <div className="post__img">
                    <img
                      src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                      alt=""
                      width={"100px"}
                    />
                  </div>
                  <div className="post__content">
                    <div className="content__top">
                      <div className="category">Categoria</div>
                      <div className="date">12 Agosto, 2022</div>
                    </div>
                    <div className="title__content">
                      <Link className="title">Titulo Proyecto</Link>
                    </div>

                    <p className="description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero, est maiores et adipisci blanditiis fugit ipsam?
                      Explicabo fugiat voluptates, dolor veniam facilis in
                      numquam aperiam totam nobis repellendus? Repudiandae,
                      odit.
                    </p>
                  </div>

                  <div className="post__footer">
                    <div className="footer__left">
                      <Link className="view-more">
                        Ver Más <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                    <div className="footer__right">
                      Share:
                      <button className="reset btn-share">
                        <i class="fa-brands fa-facebook-f"></i>
                      </button>
                      <button className="reset btn-share">
                        <i class="fa-brands fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <button className="reset prev">Anterior</button>
                <button className="reset num active" id="num">
                  1
                </button>
                <button className="reset num" id="num">
                  2
                </button>
                <button className="reset next">Siguiente</button>
              </div>
            </div>
            <div className="right">
              <section className="section post__search">
                <form action="">
                  <div className="form__div">
                    <input
                      type="search"
                      name="search"
                      id=""
                      placeholder="Buscar proyecto.."
                      className="form__input"
                    />
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </form>
              </section>

              <section className="section post__categories">
                <h2 className="heading__post-section">
                  Categorías <span>Proyectos</span>
                </h2>
                <div className="item">
                  <span className="name">Nombre Cat</span>
                  <span className="count">( 1 )</span>
                </div>

                <div className="item">
                  <span className="name">Nombre Cat</span>
                  <span className="count">( 1 )</span>
                </div>

                <div className="item">
                  <span className="name">Nombre Cat</span>
                  <span className="count">( 1 )</span>
                </div>
              </section>

              <section className="section recent__post">
                <h2 className="heading__post-section">
                  Ultimos <span>Proyectos</span>
                </h2>
                <div className="item">
                  <div className="recent__left">
                    <div className="cont__img">
                      <img
                        src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                        alt=""
                        width={"40px"}
                      />
                    </div>
                  </div>
                  <div className="recent__right">
                    <h3>Titulo</h3>
                    <div className="date">12 Agosto, 2022</div>
                  </div>
                </div>

                <div className="item">
                  <div className="recent__left">
                    <div className="cont__img">
                      <img
                        src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                        alt=""
                        width={"40px"}
                      />
                    </div>
                  </div>
                  <div className="recent__right">
                    <h3>Titulo</h3>
                    <div className="date">12 Agosto, 2022</div>
                  </div>
                </div>

                <div className="item">
                  <div className="recent__left">
                    <div className="cont__img">
                      <img
                        src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                        alt=""
                        width={"40px"}
                      />
                    </div>
                  </div>
                  <div className="recent__right">
                    <h3>Titulo</h3>
                    <div className="date">12 Agosto, 2022</div>
                  </div>
                </div>

                <div className="item">
                  <div className="recent__left">
                    <div className="cont__img">
                      <img
                        src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                        alt=""
                        width={"40px"}
                      />
                    </div>
                  </div>
                  <div className="recent__right">
                    <h3>Titulo</h3>
                    <div className="date">12 Agosto, 2022</div>
                  </div>
                </div>

                <div className="item">
                  <div className="recent__left">
                    <div className="cont__img">
                      <img
                        src="https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881"
                        alt=""
                        width={"40px"}
                      />
                    </div>
                  </div>
                  <div className="recent__right">
                    <h3>Titulo</h3>
                    <div className="date">12 Agosto, 2022</div>
                  </div>
                </div>
              </section>

              <section className="section post__tags">
                <h2 className="heading__post-section">
                  Tags <span>Proyectos</span>
                </h2>

                <div className="tag__wrapper">
                  <button className="item">NOMBRE TAG</button>
                  <button className="item">NOMBRE TAG</button>
                  <button className="item">NOMBRE TAG</button>
                  <button className="item">NOMBRE TAG</button>
                  <button className="item">NOMBRE TAG</button>
                  <button className="item">NOMBRE TAG</button>
                </div>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
