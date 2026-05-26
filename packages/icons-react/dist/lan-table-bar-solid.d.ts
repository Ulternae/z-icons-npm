import React from 'react';

export interface LanTableBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableBarSolid: React.FC<LanTableBarSolidProps>;
export default LanTableBarSolid;
