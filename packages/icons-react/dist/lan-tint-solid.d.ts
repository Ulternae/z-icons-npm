import React from 'react';

export interface LanTintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTintSolid: React.FC<LanTintSolidProps>;
export default LanTintSolid;
