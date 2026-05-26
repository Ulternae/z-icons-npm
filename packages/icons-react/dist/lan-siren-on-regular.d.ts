import React from 'react';

export interface LanSirenOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenOnRegular: React.FC<LanSirenOnRegularProps>;
export default LanSirenOnRegular;
