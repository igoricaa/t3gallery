import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image src={image.url} alt={image.name} width={384} height={256} />
    </div>
  );
}