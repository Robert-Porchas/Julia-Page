import {
  DraggableContainer,
  GridBody,
  GridItem,
} from "@/components/ui/infinite-drag-scroll";
import { pictures } from "@/lib/pictures";

export default function HomePage() {
  return (
    <main className="h-dvh w-screen overflow-hidden bg-[#141414]">
      <DraggableContainer className="h-fit w-fit" variant="polaroid">
        <GridBody>
          {pictures.map((picture) => (
            <GridItem key={picture.id} className="h-[300px] w-[220px] md:h-[380px] md:w-[280px]">
              <img
                className="h-full w-full object-cover"
                src={picture.src}
                alt={picture.alt}
                loading="lazy"
              />
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
    </main>
  );
}
