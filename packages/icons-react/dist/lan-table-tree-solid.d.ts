import React from 'react';

export interface LanTableTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableTreeSolid: React.FC<LanTableTreeSolidProps>;
export default LanTableTreeSolid;
