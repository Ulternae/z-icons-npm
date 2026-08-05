import React from 'react';

export interface LanShareFromSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareFromSquareSolid(props: LanShareFromSquareSolidProps): React.ReactElement;
export default LanShareFromSquareSolid;
