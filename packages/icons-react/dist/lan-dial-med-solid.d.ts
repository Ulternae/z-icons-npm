import React from 'react';

export interface LanDialMedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedSolid: React.FC<LanDialMedSolidProps>;
export default LanDialMedSolid;
