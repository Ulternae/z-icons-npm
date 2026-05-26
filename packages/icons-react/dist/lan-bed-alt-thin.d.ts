import React from 'react';

export interface LanBedAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedAltThin: React.FC<LanBedAltThinProps>;
export default LanBedAltThin;
