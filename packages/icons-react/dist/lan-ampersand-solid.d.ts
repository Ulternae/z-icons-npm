import React from 'react';

export interface LanAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpersandSolid: React.FC<LanAmpersandSolidProps>;
export default LanAmpersandSolid;
