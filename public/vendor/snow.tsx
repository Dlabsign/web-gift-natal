// src/components/Snow.tsx
"use client";

import { useEffect } from "react";

export default function Snow() {
  useEffect(() => {
    let embedimSnow = document.getElementById("embedim--snow");
    if (!embedimSnow) {
      function embRand(a: number, b: number) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
      }

      let embCSS =
        ".embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px;opacity: 0;animation: fadeIn 3s forwards, fall linear infinite}";
      let embHTML = "";

      for (let i = 1; i <= 26; i++) {
        embHTML += '<i class="embedim-snow"></i>';
        let rndX = embRand(0, 1000000) * 0.0001,
          rndO = embRand(-100000, 100000) * 0.0001,
          rndT = (embRand(3, 8) * 10).toFixed(2),
          rndS = (embRand(0, 10000) * 0.0001).toFixed(2);

        embCSS += `.embedim-snow:nth-child(${i}) {
            opacity: ${(embRand(1, 10000) * 0.0001).toFixed(2)};
            transform: translate(${rndX.toFixed(2)}vw, -10px) scale(${rndS});
            animation: fadeIn 3s forwards, fall-${i} ${embRand(
          10,
          30
        )}s -${embRand(0, 30)}s linear infinite;
          }
          @keyframes fall-${i} {
            ${rndT}% { transform: translate(${(rndX + rndO).toFixed(
          2
        )}vw, ${rndT}vh) scale(${rndS}); }
            to { transform: translate(${(rndX + rndO / 2).toFixed(
              2
            )}vw, 105vh) scale(${rndS}); }
          }`;
      }

      // Adding fadeIn animation for a smooth appearance
      embCSS += `
        @keyframes fadeIn {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 2; }
        }
      `;

      embedimSnow = document.createElement("div");
      embedimSnow.id = "embedim--snow";
      embedimSnow.innerHTML =
        `<style>
          #embedim--snow {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 9999999;
            pointer-events: none;
          }
          ${embCSS}
        </style>` + embHTML;

      document.body.appendChild(embedimSnow);
    }
  }, []);

  return null; // Komponen tidak perlu merender elemen visual
}
