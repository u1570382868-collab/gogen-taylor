import Icon from './Icon';

export default function ReviewCard({ review }) {
  const dateFormatted = new Date(review.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="bg-white border border-ink-100 rounded-sm p-6 shadow-sm"
    >
      <meta itemProp="itemReviewed" content="GOGEN-TAYLOR" />

      {/* Rating */}
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
        className="flex items-center gap-1 mb-3"
      >
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name={i < review.rating ? 'star' : 'starOutline'}
            className={`w-4 h-4 ${i < review.rating ? 'text-red-600' : 'text-ink-200'}`}
            strokeWidth={i < review.rating ? 0 : 1.5}
          />
        ))}
      </div>

      {/* Texto */}
      <p itemProp="reviewBody" className="text-body text-ink-700 mb-4 leading-relaxed">
        {review.text}
      </p>

      {/* Autor + fecha */}
      <div className="flex items-center justify-between pt-3 border-t border-ink-100">
        <div
          itemProp="author"
          itemScope
          itemType="https://schema.org/Organization"
          className="flex flex-col"
        >
          <span itemProp="name" className="text-body-sm font-semibold text-ink-800">
            {review.author}
          </span>
          <span className="text-caption uppercase text-ink-400">
            {review.location} · {dateFormatted}
          </span>
        </div>
        {review.verified && (
          <span className="inline-flex items-center gap-1 text-caption uppercase text-success">
            <Icon name="check" className="w-3 h-3" strokeWidth={2.5} />
            Verificada
          </span>
        )}
      </div>
    </article>
  );
}
