import React from 'react';

export interface LanRaindropsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaindropsRegular: React.FC<LanRaindropsRegularProps>;
export default LanRaindropsRegular;
