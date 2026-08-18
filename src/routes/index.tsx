import { createFileRoute } from "@tanstack/react-router";

const title = "Gravação e Corte a Laser | Personalizados Premium";
const description =
  "Ateliê de gravação e personalização a laser: copos, garrafas, facas, carteiras e chaveiros em couro legítimo. Precisão que marca, detalhes que eternizam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/landing.html"
      title={title}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
    />
  );
}
