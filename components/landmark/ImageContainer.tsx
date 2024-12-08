import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        className="object-cover"
        sizes="100vw"
        src={mainImage}
        alt={name}
        fill
        priority
      />
    </section>
  );
};
export default ImageContainer;
