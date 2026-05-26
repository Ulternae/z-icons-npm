import React from 'react';

export interface LanHeadSideCircuitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCircuitSolid: React.FC<LanHeadSideCircuitSolidProps>;
export default LanHeadSideCircuitSolid;
