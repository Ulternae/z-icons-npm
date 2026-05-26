import React from 'react';

export interface LanMobileRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRetroThin: React.FC<LanMobileRetroThinProps>;
export default LanMobileRetroThin;
