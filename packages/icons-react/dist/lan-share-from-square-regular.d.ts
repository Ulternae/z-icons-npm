import React from 'react';

export interface LanShareFromSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareFromSquareRegular: React.FC<LanShareFromSquareRegularProps>;
export default LanShareFromSquareRegular;
