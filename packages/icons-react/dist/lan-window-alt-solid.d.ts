import React from 'react';

export interface LanWindowAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowAltSolid: React.FC<LanWindowAltSolidProps>;
export default LanWindowAltSolid;
