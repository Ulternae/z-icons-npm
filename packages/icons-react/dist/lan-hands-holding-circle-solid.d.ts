import React from 'react';

export interface LanHandsHoldingCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingCircleSolid: React.FC<LanHandsHoldingCircleSolidProps>;
export default LanHandsHoldingCircleSolid;
