import React from 'react';

export interface LanDrumstickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickRegular: React.FC<LanDrumstickRegularProps>;
export default LanDrumstickRegular;
