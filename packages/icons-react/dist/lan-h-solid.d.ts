import React from 'react';

export interface LanHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHSolid: React.FC<LanHSolidProps>;
export default LanHSolid;
