import React from 'react';

export interface LanLessThanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThanSolid: React.FC<LanLessThanSolidProps>;
export default LanLessThanSolid;
