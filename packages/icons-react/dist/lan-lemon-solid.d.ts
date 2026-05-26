import React from 'react';

export interface LanLemonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLemonSolid: React.FC<LanLemonSolidProps>;
export default LanLemonSolid;
