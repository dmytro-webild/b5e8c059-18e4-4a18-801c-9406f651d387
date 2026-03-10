import React, { SVGProps } from "react";

interface SvgTextLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  className = "",  text = "Logo",  fontSize = 24,
  fontFamily = "Arial, sans-serif",  fill = "currentColor",  ...props
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize} ${fontSize * 1.2}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <text
        x="0"
        y={fontSize}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={fill}
        dominantBaseline="auto"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
