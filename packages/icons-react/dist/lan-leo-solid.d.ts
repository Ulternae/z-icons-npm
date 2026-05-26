import React from 'react';

export interface LanLeoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeoSolid: React.FC<LanLeoSolidProps>;
export default LanLeoSolid;
