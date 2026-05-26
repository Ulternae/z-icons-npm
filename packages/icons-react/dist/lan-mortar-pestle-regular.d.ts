import React from 'react';

export interface LanMortarPestleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarPestleRegular: React.FC<LanMortarPestleRegularProps>;
export default LanMortarPestleRegular;
