import React from 'react';

export interface LanHandsHoldingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingSolid: React.FC<LanHandsHoldingSolidProps>;
export default LanHandsHoldingSolid;
