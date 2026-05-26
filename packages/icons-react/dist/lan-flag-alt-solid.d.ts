import React from 'react';

export interface LanFlagAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagAltSolid: React.FC<LanFlagAltSolidProps>;
export default LanFlagAltSolid;
