import React from 'react';

export interface LanTruckBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckBoltThin: React.FC<LanTruckBoltThinProps>;
export default LanTruckBoltThin;
