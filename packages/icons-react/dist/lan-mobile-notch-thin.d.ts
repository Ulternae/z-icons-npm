import React from 'react';

export interface LanMobileNotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileNotchThin: React.FC<LanMobileNotchThinProps>;
export default LanMobileNotchThin;
