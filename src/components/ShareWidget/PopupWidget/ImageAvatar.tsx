import { Image } from "@chakra-ui/react";
import { FC } from "react";

interface ImageAvatarProps {
  img: string;
}

const ImageAvatar: FC<ImageAvatarProps> = ({ img }) => {
  return (
    <Image
      w={6}
      h={6}
      mr="2"
      bgColor="gray.300"
      rounded="full"
      objectFit="cover"
      src={img}
    />
  );
};

export default ImageAvatar;
