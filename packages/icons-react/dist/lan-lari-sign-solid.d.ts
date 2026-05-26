import React from 'react';

export interface LanLariSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLariSignSolid: React.FC<LanLariSignSolidProps>;
export default LanLariSignSolid;
