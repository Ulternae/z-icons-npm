import React from 'react';

export interface LanMobileVibrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileVibrate: React.FC<LanMobileVibrateProps>;
export default LanMobileVibrate;
