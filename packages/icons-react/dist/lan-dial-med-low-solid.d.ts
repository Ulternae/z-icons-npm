import React from 'react';

export interface LanDialMedLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedLowSolid: React.FC<LanDialMedLowSolidProps>;
export default LanDialMedLowSolid;
