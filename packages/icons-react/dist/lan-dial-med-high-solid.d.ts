import React from 'react';

export interface LanDialMedHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedHighSolid: React.FC<LanDialMedHighSolidProps>;
export default LanDialMedHighSolid;
