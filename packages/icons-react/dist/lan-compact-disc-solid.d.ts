import React from 'react';

export interface LanCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompactDiscSolid: React.FC<LanCompactDiscSolidProps>;
export default LanCompactDiscSolid;
