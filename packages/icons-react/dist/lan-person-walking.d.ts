import React from 'react';

export interface LanPersonWalkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalking: React.FC<LanPersonWalkingProps>;
export default LanPersonWalking;
