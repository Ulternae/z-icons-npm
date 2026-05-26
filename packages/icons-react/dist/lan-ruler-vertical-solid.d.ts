import React from 'react';

export interface LanRulerVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerVerticalSolid: React.FC<LanRulerVerticalSolidProps>;
export default LanRulerVerticalSolid;
