import React from 'react';

export interface LanAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAltSolid: React.FC<LanAltSolidProps>;
export default LanAltSolid;
