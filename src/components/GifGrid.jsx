import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h3>Cargando...</h3>}
      {!isLoading && (
        <div>
          <h3> {category}</h3>
          <div className="card-grid">
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
