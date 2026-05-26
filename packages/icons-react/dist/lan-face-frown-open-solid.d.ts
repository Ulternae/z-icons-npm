import React from 'react';

export interface LanFaceFrownOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownOpenSolid: React.FC<LanFaceFrownOpenSolidProps>;
export default LanFaceFrownOpenSolid;
