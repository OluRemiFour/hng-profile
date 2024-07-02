// function updateTime() {
//   const now = new Date();
//   const options = {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   };
//   const time = now.toLocaleTimeString("en-US", options);
//   const day = now.toLocaleDateString("en-US", { weekday: "long" });

//   document.getElementById("time").textContent = time;
//   document.getElementById("day").textContent = day;
// }

// updateTime();
// setInterval(updateTime, 1000);

function updateTime() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const time = now.toLocaleTimeString("en-US", options);
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("time").textContent = time;
  document.getElementById("day").textContent = day;
}

updateTime();
setInterval(updateTime, 1000);
