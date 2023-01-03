type CardProps = { title: string; text: string; category?: string };

function Card({ title, text, category }: CardProps) {
  return (
    <div className="card | flow | rounded-md text-xs">
      <div className="card__image | rounded-lg">
        {category && (
          <p className="card__category | bg-main p-xs text-light-2">
            {category}
          </p>
        )}
        <img src="http://placekitten.com/600/600" alt={title} />
      </div>

      <h3 className="font-serif">{title}</h3>
      <p>{text}</p>
      <div className="card__footer | flex-flow">
        <p>
          vendu par <b>Marque 1</b>
        </p>
        <p className="text-500 font-bold">30€</p>
      </div>
    </div>
  );
}
export default Card;
