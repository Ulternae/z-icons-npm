import React from 'react';

export interface LanCarBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBoltThin: React.FC<LanCarBoltThinProps>;
export default LanCarBoltThin;
