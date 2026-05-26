import React from 'react';

export interface LanBoxAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxAltSolid: React.FC<LanBoxAltSolidProps>;
export default LanBoxAltSolid;
