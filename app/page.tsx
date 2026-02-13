"use client";

import { type KeyboardEvent, useState } from "react";
import {
  DraggableContainer,
  GridBody,
  GridItem,
} from "@/components/ui/infinite-drag-scroll";
import { PhotoDetailOverlay } from "@/components/ui/photo-detail-overlay";
import { pictures, type Picture } from "@/lib/pictures";

export default function HomePage() {
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);

  const handleOpenPicture = (picture: Picture) => {
    setSelectedPicture(picture);
  };

  const handleCloseOverlay = () => {
    setSelectedPicture(null);
  };

  const handleGridItemKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    picture: Picture,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleOpenPicture(picture);
  };

  return (
    <main className="h-dvh w-screen overflow-hidden bg-pink-300">
      <DraggableContainer className="h-fit w-fit" variant="polaroid">
        <GridBody>
          {pictures.map((picture) => (
            <GridItem
              key={picture.id}
              className="h-[300px] w-[220px] md:h-[380px] md:w-[280px]"
              role="button"
              tabIndex={0}
              aria-label={`Open photo details for ${picture.title}`}
              onClick={() => handleOpenPicture(picture)}
              onKeyDown={(event) => handleGridItemKeyDown(event, picture)}
            >
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
      <PhotoDetailOverlay
        open={selectedPicture !== null}
        picture={selectedPicture}
        onClose={handleCloseOverlay}
      />
    </main>
  );
}
