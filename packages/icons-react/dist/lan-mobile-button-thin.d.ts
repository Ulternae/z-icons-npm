import React from 'react';

export interface LanMobileButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileButtonThin: React.FC<LanMobileButtonThinProps>;
export default LanMobileButtonThin;
