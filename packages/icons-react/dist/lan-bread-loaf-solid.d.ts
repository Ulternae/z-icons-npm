import React from 'react';

export interface LanBreadLoafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadLoafSolid: React.FC<LanBreadLoafSolidProps>;
export default LanBreadLoafSolid;
