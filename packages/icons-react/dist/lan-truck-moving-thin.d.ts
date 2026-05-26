import React from 'react';

export interface LanTruckMovingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMovingThin: React.FC<LanTruckMovingThinProps>;
export default LanTruckMovingThin;
