import React from 'react';

export interface LanPersonDressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressSimple: React.FC<LanPersonDressSimpleProps>;
export default LanPersonDressSimple;
