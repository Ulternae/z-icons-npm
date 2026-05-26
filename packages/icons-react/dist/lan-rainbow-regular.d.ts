import React from 'react';

export interface LanRainbowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRainbowRegular: React.FC<LanRainbowRegularProps>;
export default LanRainbowRegular;
