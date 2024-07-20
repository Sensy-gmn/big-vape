import type { Metadata } from "next";

function getMetadata(title: string, description: string) {
  return {
    title: title,
    description: description,
  };
}
export const metadata: Metadata = {
  title: `Accueil - The Big Vape`,
  description: "Accueil",
};
