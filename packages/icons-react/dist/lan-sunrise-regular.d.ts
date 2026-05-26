import React from 'react';

export interface LanSunriseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunriseRegular: React.FC<LanSunriseRegularProps>;
export default LanSunriseRegular;
