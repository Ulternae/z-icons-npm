import React from 'react';

export interface LanUserHeadsetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHeadsetThin: React.FC<LanUserHeadsetThinProps>;
export default LanUserHeadsetThin;
