import ProjectImageGallery from "./ProjectImageGallery";

export default function WorkExperienceItem({
  title,
  children,
  images,
  heightClass,
  widthClass,
}) {
  // Render children flexibly: if children are plain strings (or an array of strings),
  // wrap them in paragraph tags as before. If children contain JSX/react nodes,
  // render them directly so callers can include custom layout (e.g., images).
  const isArrayOfStrings =
    Array.isArray(children) && children.every((c) => typeof c === "string");
  const isString = typeof children === "string";

  return (
    <div className="py-4 md:py-6 border-b border-gray-200 last:border-b-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl py-3 md:py-4 font-semibold">
        {title}
      </h2>
      <div className="space-y-3 md:space-y-4">
        {isArrayOfStrings ? (
          children.map((child, index) => (
            <p
              key={index}
              className="text-base sm:text-lg py-2 leading-7 md:leading-8 text-gray-800"
            >
              {child}
            </p>
          ))
        ) : isString ? (
          <p className="text-base sm:text-lg py-2 leading-7 md:leading-8 text-gray-800">
            {children}
          </p>
        ) : (
          children
        )}
      </div>
      {images && (
        <ProjectImageGallery
          images={images}
          heightClass={heightClass}
          widthClass={widthClass}
        />
      )}
    </div>
  );
}
