import React from 'react';

export interface LanBrightnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrightness: React.FC<LanBrightnessProps>;
export default LanBrightness;
