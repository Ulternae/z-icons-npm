import React from 'react';

export interface LanSolarSystemRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarSystemRegular: React.FC<LanSolarSystemRegularProps>;
export default LanSolarSystemRegular;
