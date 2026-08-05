import React from 'react';

export interface LanShareFromSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareFromSquare(props: LanShareFromSquareProps): React.ReactElement;
export default LanShareFromSquare;
