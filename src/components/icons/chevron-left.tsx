export default function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      style={{
        filter:
          "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))",
      }}
      className="cursor-pointer"
    >
      <g filter="url(#filter0_dd_10_7029)">
        <path
          d="M30.5 36L18.5 24L30.5 12"
          stroke="#031432"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_10_7029"
          x="-3.5"
          y="-3"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_10_7029"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_7029"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_10_7029"
            result="effect2_dropShadow_10_7029"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_10_7029"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
