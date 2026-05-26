import React from 'react';

export interface LanYinYangSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYinYangSolid: React.FC<LanYinYangSolidProps>;
export default LanYinYangSolid;
