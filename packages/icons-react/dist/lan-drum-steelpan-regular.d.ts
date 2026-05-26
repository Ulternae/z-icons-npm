import React from 'react';

export interface LanDrumSteelpanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumSteelpanRegular: React.FC<LanDrumSteelpanRegularProps>;
export default LanDrumSteelpanRegular;
