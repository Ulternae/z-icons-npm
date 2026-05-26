import React from 'react';

export interface LanShareFromSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareFromSquareSolid: React.FC<LanShareFromSquareSolidProps>;
export default LanShareFromSquareSolid;
