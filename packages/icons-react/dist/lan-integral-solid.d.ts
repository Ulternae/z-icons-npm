import React from 'react';

export interface LanIntegralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntegralSolid: React.FC<LanIntegralSolidProps>;
export default LanIntegralSolid;
