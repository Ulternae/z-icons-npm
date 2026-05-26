import React from 'react';

export interface LanSunsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunsetRegular: React.FC<LanSunsetRegularProps>;
export default LanSunsetRegular;
