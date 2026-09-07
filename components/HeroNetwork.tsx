// export function HeroNetwork() {
//   return (
//     <div className="network" aria-label="Abstract digital infrastructure illustration" role="img">
//       <div className="network-label label-a">SYSTEM / 01</div>
//       <div className="network-label label-b">DATA FLOW</div>
//       <div className="network-label label-c">ONLINE</div>
//       <div className="network-orbit orbit-a" />
//       <div className="network-orbit orbit-b" />
//       <svg viewBox="0 0 720 620" fill="none" aria-hidden="true">
//         <defs>
//           <linearGradient id="lineFade" x1="0" y1="0" x2="720" y2="620">
//             <stop offset="0" stopColor="#10B981" stopOpacity=".05" />
//             <stop offset=".55" stopColor="#10B981" stopOpacity=".72" />
//             <stop offset="1" stopColor="#10B981" stopOpacity=".06" />
//           </linearGradient>
//         </defs>
//         <g stroke="url(#lineFade)" strokeWidth="1">
//           <path d="M-20 125 C145 80 190 260 350 220 S555 100 740 140" />
//           <path d="M-20 150 C145 105 190 285 350 245 S555 125 740 165" />
//           <path d="M-20 175 C145 130 190 310 350 270 S555 150 740 190" />
//           <path d="M-20 200 C145 155 190 335 350 295 S555 175 740 215" />
//           <path d="M-20 225 C145 180 190 360 350 320 S555 200 740 240" />
//           <path d="M40 620 C120 490 160 425 270 400 S445 470 520 300 S625 175 760 70" />
//           <path d="M15 600 C95 470 135 405 245 380 S420 450 495 280 S600 155 735 50" />
//           <path d="M-10 580 C70 450 110 385 220 360 S395 430 470 260 S575 135 710 30" />
//         </g>
//         <g fill="#0F172A" stroke="#10B981" strokeWidth="2">
//           <circle cx="194" cy="274" r="6" />
//           <circle cx="350" cy="295" r="7" />
//           <circle cx="495" cy="280" r="5" />
//           <circle cx="590" cy="157" r="6" />
//           <circle cx="270" cy="400" r="5" />
//         </g>
//         <g stroke="#10B981" strokeWidth="1" opacity=".65">
//           <path d="M350 295v-94" />
//           <path d="M350 295h120" />
//           <path d="M350 295l-80 105" />
//         </g>
//         <g fill="#10B981">
//           <circle cx="350" cy="201" r="2.5" />
//           <circle cx="470" cy="295" r="2.5" />
//           <circle cx="270" cy="400" r="2.5" />
//         </g>
//       </svg>
//       <div className="network-core"><span /><span /><span /></div>
//     </div>
//   );
// }
import "./hero-network.css";

// export function HeroNetwork() {
//   return (
//     <div
//       className="network"
//       aria-label="Abstract digital infrastructure illustration"
//       role="img"
//     >
//       <div className="network-label label-a">SYSTEM / 01</div>
//       <div className="network-label label-b">DATA FLOW</div>
//       <div className="network-label label-c">ONLINE</div>

//       <div className="network-orbit orbit-a" />
//       <div className="network-orbit orbit-b" />

//       <svg viewBox="0 0 720 620" fill="none" aria-hidden="true">
//         <defs>
//           <linearGradient id="lineFade" x1="0" y1="0" x2="720" y2="620">
//             <stop offset="0" stopColor="#10B981" stopOpacity=".05" />
//             <stop offset=".55" stopColor="#10B981" stopOpacity=".72" />
//             <stop offset="1" stopColor="#10B981" stopOpacity=".06" />
//           </linearGradient>

//           {/* Soft glow for the central node */}
//           <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
//             <feGaussianBlur stdDeviation="4" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Main network lines */}
//         <g className="network-lines" stroke="url(#lineFade)" strokeWidth="2">
//           <path d="M-20 125 C145 80 190 260 350 220 S555 100 740 140" />
//           <path d="M-20 150 C145 105 190 285 350 245 S555 125 740 165" />
//           <path d="M-20 175 C145 130 190 310 350 270 S555 150 740 190" />
//           <path d="M-20 200 C145 155 190 335 350 295 S555 175 740 215" />
//           <path d="M-20 225 C145 180 190 360 350 320 S555 200 740 240" />

//           <path d="M40 620 C120 490 160 425 270 400 S445 470 520 300 S625 175 760 70" />
//           <path d="M15 600 C95 470 135 405 245 380 S420 450 495 280 S600 155 735 50" />
//           <path d="M-10 580 C70 450 110 385 220 360 S395 430 470 260 S575 135 710 30" />
//         </g>

//         {/* Network nodes */}
//         <g
//           className="network-nodes"
//           fill="#0F172A"
//           stroke="#10B981"
//           strokeWidth="2.5"
//         >
//           <circle cx="194" cy="274" r="6" />
//           <circle
//             className="network-node-main"
//             cx="350"
//             cy="295"
//             r="7"
//             filter="url(#nodeGlow)"
//           />
//           <circle cx="495" cy="280" r="5" />
//           <circle cx="590" cy="157" r="6" />
//           <circle cx="270" cy="400" r="5" />
//         </g>

//         {/* Core connections */}
//         <g
//           className="network-connections"
//           stroke="#10B981"
//           strokeWidth="1.5"
//           opacity=".65"
//         >
//           <path d="M350 295v-94" />
//           <path d="M350 295h120" />
//           <path d="M350 295l-80 105" />
//         </g>

//         {/* Connection points */}
//         <g className="network-points" fill="#10B981">
//           <circle cx="350" cy="201" r="2.5" />
//           <circle cx="470" cy="295" r="2.5" />
//           <circle cx="270" cy="400" r="2.5" />
//         </g>
//       </svg>

//       <div className="network-core">
//         <span />
//         <span />
//         <span />
//       </div>
//     </div>
//   );
// }

export function HeroNetwork() {
  return (
    <div
      className="network"
      aria-label="Abstract digital infrastructure illustration"
      role="img"
    >
      <div className="network-label label-a">SYSTEM / 01</div>
      <div className="network-label label-b">DATA FLOW</div>
      <div className="network-label label-c">ONLINE</div>

      <div className="network-orbit orbit-a" />
      <div className="network-orbit orbit-b" />

      <svg viewBox="0 0 720 620" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="lineFade" x1="0" y1="0" x2="720" y2="620">
            <stop offset="0" stopColor="#10B981" stopOpacity=".05" />
            <stop offset=".55" stopColor="#10B981" stopOpacity=".72" />
            <stop offset="1" stopColor="#10B981" stopOpacity=".06" />
          </linearGradient>

          <filter id="orbitGlow" x="-300%" y="-300%" width="600%" height="600%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main network */}
        <g className="network-lines" stroke="url(#lineFade)" strokeWidth="2">
          <path
            id="network-path-1"
            d="M-20 125 C145 80 190 260 350 220 S555 100 740 140"
          />

          <path
            id="network-path-2"
            d="M-20 150 C145 105 190 285 350 245 S555 125 740 165"
          />

          <path
            id="network-path-3"
            d="M-20 175 C145 130 190 310 350 270 S555 150 740 190"
          />

          <path
            id="network-path-4"
            d="M-20 200 C145 155 190 335 350 295 S555 175 740 215"
          />

          <path
            id="network-path-5"
            d="M-20 225 C145 180 190 360 350 320 S555 200 740 240"
          />

          <path
            id="network-path-6"
            d="M40 620 C120 490 160 425 270 400 S445 470 520 300 S625 175 760 70"
          />

          <path
            id="network-path-7"
            d="M15 600 C95 470 135 405 245 380 S420 450 495 280 S600 155 735 50"
          />

          <path
            id="network-path-8"
            d="M-10 580 C70 450 110 385 220 360 S395 430 470 260 S575 135 710 30"
          />
        </g>

        {/* Static network nodes */}
        <g fill="#0F172A" stroke="#10B981" strokeWidth="2.5">
          <circle cx="194" cy="274" r="6" />
          <circle
            className="network-node-main"
            cx="350"
            cy="295"
            r="7"
            filter="url(#orbitGlow)"
          />
          <circle cx="495" cy="280" r="5" />
          <circle cx="590" cy="157" r="6" />
          <circle cx="270" cy="400" r="5" />
        </g>

        {/* Core connections */}
        <g
          className="network-connections"
          stroke="#10B981"
          strokeWidth="1.5"
          opacity=".65"
        >
          <path d="M350 295v-94" />
          <path d="M350 295h120" />
          <path d="M350 295l-80 105" />
        </g>

        {/* Connection points */}
        <g fill="#10B981">
          <circle cx="350" cy="201" r="2.5" />
          <circle cx="470" cy="295" r="2.5" />
          <circle cx="270" cy="400" r="2.5" />
        </g>

        {/* =====================================
            ORBITING DATA PARTICLES
            ===================================== */}

        <g className="orbit-particles" fill="#10B981" filter="url(#orbitGlow)">
          {/* Particle 1 */}
          <circle r="4">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
              <mpath href="#network-path-1" />
            </animateMotion>
          </circle>

          {/* Particle 2 */}
          <circle r="3">
            <animateMotion
              dur="9s"
              begin="-3s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#network-path-3" />
            </animateMotion>
          </circle>

          {/* Particle 3 */}
          <circle r="3.5">
            <animateMotion
              dur="8s"
              begin="-5s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#network-path-5" />
            </animateMotion>
          </circle>

          {/* Particle 4 */}
          <circle r="3">
            <animateMotion
              dur="10s"
              begin="-2s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#network-path-6" />
            </animateMotion>
          </circle>

          {/* Particle 5 */}
          <circle r="3.5">
            <animateMotion
              dur="8s"
              begin="-6s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#network-path-7" />
            </animateMotion>
          </circle>

          {/* Particle 6 */}
          <circle r="2.5">
            <animateMotion
              dur="11s"
              begin="-4s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#network-path-8" />
            </animateMotion>
          </circle>
        </g>
      </svg>

      <div className="network-core">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
