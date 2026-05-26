import React from 'react';

export interface LanFileAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAltSolid: React.FC<LanFileAltSolidProps>;
export default LanFileAltSolid;
