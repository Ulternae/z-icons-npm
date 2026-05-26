import React from 'react';

export interface LanTruckFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFrontThin: React.FC<LanTruckFrontThinProps>;
export default LanTruckFrontThin;
