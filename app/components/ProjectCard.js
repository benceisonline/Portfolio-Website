import ProjectImageGallery from "./ProjectImageGallery";

export default function ProjectCard({ title, description, images, heightClass, widthClass }) {
  return (
    <div className="py-4 md:py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl py-3 md:py-4 font-semibold">{title}</h2>
      <p className="text-base sm:text-lg py-2 md:py-3 leading-7 md:leading-8 text-gray-800">
        {description}
      </p>
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
