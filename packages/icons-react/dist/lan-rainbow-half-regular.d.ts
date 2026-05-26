import React from 'react';

export interface LanRainbowHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowHalfRegular: React.FC<LanRainbowHalfRegularProps>;
export default LanRainbowHalfRegular;
