import React from 'react';

export interface LanSpiralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiralRegular: React.FC<LanSpiralRegularProps>;
export default LanSpiralRegular;
