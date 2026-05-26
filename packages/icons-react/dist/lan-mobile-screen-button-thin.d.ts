import React from 'react';

export interface LanMobileScreenButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileScreenButtonThin: React.FC<LanMobileScreenButtonThinProps>;
export default LanMobileScreenButtonThin;
