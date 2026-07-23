import { renderOgImage, size, contentType, alt } from "@/lib/og";

export { size, contentType, alt };

export default function Image() {
  return renderOgImage();
}
