import React from 'react';

export interface LanBrightnessLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrightnessLow: React.FC<LanBrightnessLowProps>;
export default LanBrightnessLow;
