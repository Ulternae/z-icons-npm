import React from 'react';

export interface LanHandsHoldingChildSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingChildSolid: React.FC<LanHandsHoldingChildSolidProps>;
export default LanHandsHoldingChildSolid;
