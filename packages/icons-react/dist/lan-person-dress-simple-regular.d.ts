import React from 'react';

export interface LanPersonDressSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressSimpleRegular: React.FC<LanPersonDressSimpleRegularProps>;
export default LanPersonDressSimpleRegular;
