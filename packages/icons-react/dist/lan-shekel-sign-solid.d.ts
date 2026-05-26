import React from 'react';

export interface LanShekelSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShekelSignSolid: React.FC<LanShekelSignSolidProps>;
export default LanShekelSignSolid;
