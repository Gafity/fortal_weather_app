export const CloudIcon = () => {
  return (
    <svg
      id="cloud"
      viewBox="0 0 210 297"
      width="210"
      height="297"
      role="img"
      aria-label="Cloud"
    >
      <g>
        {/* Elipse principal (base da nuvem) */}
        <ellipse
          style={{ fill: "#ffffff", strokeWidth: 0.264583 }}
          id="path2"
          cx="110.22152"
          cy="123.37974"
          rx="52.462025"
          ry="19.139236"
        />

        {/* Arco superior da nuvem */}
        <path
          style={{ fill: "#ffffff", strokeWidth: 0.264583 }}
          id="path4"
          d="M 143.5443,99.284805 A 31.955696,19.651899 0 0 1 111.72869,118.93652 31.955696,19.651899 0 0 1 79.63414,99.457092 31.955696,19.651899 0 0 1 111.16838,79.634605 31.955696,19.651899 0 0 1 143.53939,98.940244"
        />

        {/* Linha de destaque */}
        <path
          style={{ fill: "#b3b3b3", strokeWidth: 0.264583 }}
          d="M 93.303795,139.10126 158.2405,122.35443"
          id="path13"
        />

        {/* Detalhe inferior */}
        <path
          style={{ fill: "#b3b3b3", strokeWidth: 0.264583 }}
          d="m 82.70886,137.05063 76.89873,-19.48101 1.70886,5.12658 -3.41772,7.17722 -20.8481,8.88607 -20.8481,1.70886 -34.177216,-1.02532"
          id="path14"
        />
      </g>
    </svg>
  );
};
