import React from 'react';

export interface LanCarBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBurstThin: React.FC<LanCarBurstThinProps>;
export default LanCarBurstThin;
