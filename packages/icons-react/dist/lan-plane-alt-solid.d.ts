import React from 'react';

export interface LanPlaneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneAltSolid: React.FC<LanPlaneAltSolidProps>;
export default LanPlaneAltSolid;
