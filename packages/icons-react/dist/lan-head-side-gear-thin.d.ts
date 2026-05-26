import React from 'react';

export interface LanHeadSideGearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideGearThin: React.FC<LanHeadSideGearThinProps>;
export default LanHeadSideGearThin;
