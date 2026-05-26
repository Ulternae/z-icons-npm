import React from 'react';

export interface LanHandHoldingStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingStarSolid: React.FC<LanHandHoldingStarSolidProps>;
export default LanHandHoldingStarSolid;
