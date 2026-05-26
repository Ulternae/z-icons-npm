import React from 'react';

export interface LanShareFromSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareFromSquare: React.FC<LanShareFromSquareProps>;
export default LanShareFromSquare;
