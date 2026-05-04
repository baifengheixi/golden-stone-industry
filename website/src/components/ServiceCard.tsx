import Link from "next/link";

interface ServiceCardProps {
  number: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  features?: string[];
  icon: React.ReactNode;
}

export function ServiceCard({
  number,
  titleTh,
  titleEn,
  descriptionTh,
  descriptionEn,
  features,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      {/* Number + Icon */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-4xl font-bold text-gold/20">{number}</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-1 text-lg font-bold text-navy">{titleTh}</h3>
      <p className="mb-3 text-sm text-gray-500">{titleEn}</p>

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-gray-600">
        {descriptionTh}
      </p>
      <p className="mb-4 text-xs leading-relaxed text-gray-400">
        {descriptionEn}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                className="mt-1 h-3.5 w-3.5 shrink-0 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href="/services"
        className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
      >
        ดูรายละเอียด / Details
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
