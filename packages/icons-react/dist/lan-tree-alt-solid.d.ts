import React from 'react';

export interface LanTreeAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeAltSolid: React.FC<LanTreeAltSolidProps>;
export default LanTreeAltSolid;
