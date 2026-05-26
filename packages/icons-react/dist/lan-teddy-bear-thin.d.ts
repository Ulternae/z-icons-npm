import React from 'react';

export interface LanTeddyBearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeddyBearThin: React.FC<LanTeddyBearThinProps>;
export default LanTeddyBearThin;
