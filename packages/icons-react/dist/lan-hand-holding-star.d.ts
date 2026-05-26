import React from 'react';

export interface LanHandHoldingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingStar: React.FC<LanHandHoldingStarProps>;
export default LanHandHoldingStar;
