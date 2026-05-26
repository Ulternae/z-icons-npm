import React from 'react';

export interface LanGreaterThanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThanSolid: React.FC<LanGreaterThanSolidProps>;
export default LanGreaterThanSolid;
