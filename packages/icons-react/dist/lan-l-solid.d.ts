import React from 'react';

export interface LanLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLSolid: React.FC<LanLSolidProps>;
export default LanLSolid;
