import React from 'react';

export interface LanDrumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumRegular: React.FC<LanDrumRegularProps>;
export default LanDrumRegular;
