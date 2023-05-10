const allText = document.querySelectorAll(".text");

let delay = 0;

allText.forEach((element, index) => {
  element.style["animation-delay"] = `${delay}s`;
  element.style["z-index"] = allText.length - index;
  element.classList.add("base-anim");

  delay += 0.05;
});

document.getElementById("wrapper").addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const { clientX, clientY } = e;

  const percentX = clientX / innerWidth;
  const maxRangeX = innerWidth * 0.15;
  const minX = innerWidth / 2 - maxRangeX;
  const maxX = innerWidth / 2 + maxRangeX;
  const difX = maxX - minX;
  const pxOffset = difX * percentX;

  const left = minX + pxOffset;

  const percentY = clientY / innerHeight;
  const maxRangeY = innerHeight * 0.1;
  const minY = innerHeight / 2 - maxRangeY;
  const maxY = innerHeight / 2 + maxRangeY;
  const difY = maxY - minY;
  const pxOffsetY = difY * percentY;

  const top = minY + pxOffsetY;

  allText.forEach((element, index) => {
    element.animate(
      {
        top: `${top}px`,
        left: `${left}px`,
      },
      { duration: 1000, fill: "forwards", delay: index * 50 }
    );
  });
});