import React from 'react';

export interface LanKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKSolid: React.FC<LanKSolidProps>;
export default LanKSolid;
