import { useEffect } from "react";

const SmoothScroll = ({ targetId }) => {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetId]);

  return null;
};

export default SmoothScroll;
