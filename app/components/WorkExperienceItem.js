import ProjectImageGallery from "./ProjectImageGallery";

export default function WorkExperienceItem({ title, children, images, heightClass, widthClass }) {
  return (
    <div className="py-4 md:py-6 border-b border-gray-200 last:border-b-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl py-3 md:py-4 font-semibold">{title}</h2>
      <div className="space-y-3 md:space-y-4">
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <p key={index} className="text-base sm:text-lg py-2 leading-7 md:leading-8 text-gray-800">
              {child}
            </p>
          ))
        ) : (
          <p className="text-base sm:text-lg py-2 leading-7 md:leading-8 text-gray-800">{children}</p>
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
