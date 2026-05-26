import React from 'react';

export interface LanCediSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCediSignSolid: React.FC<LanCediSignSolidProps>;
export default LanCediSignSolid;
