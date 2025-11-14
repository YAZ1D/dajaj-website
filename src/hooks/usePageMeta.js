import { useEffect } from "react";

export default function usePageMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let descTag = document.querySelector("meta[name='description']");
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        document.head.appendChild(descTag);
      }
      descTag.setAttribute("content", description);
    }

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical]);
}
