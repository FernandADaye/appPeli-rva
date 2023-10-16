import'./Pelicula.css'
export default function Pelicula() {
    return (
    <>
    <div className="card" >
    <img src="https://i.pinimg.com/564x/9e/9a/7d/9e9a7d14bc8afb71fe083a008c717928.jpg" className="card-img-top" alt="pelicula"/>
    <div className="card-body">
    <h5 className="card-title">Titulo de la Pelicula </h5>
    <p className="card-text">Lorem elit. Quam, desrunt non iusto porro asperiores debitis atque natus vitae eum voluptatem minima molestiae perspiciatis nesciunt, excepturi quas et voluptate in optio!Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn-btn-primary">Ver pelicula </a>
    </div>
</div>
    </>
)
}
