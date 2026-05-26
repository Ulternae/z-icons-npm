import React from 'react';

export interface LanCarBumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBumpThin: React.FC<LanCarBumpThinProps>;
export default LanCarBumpThin;
