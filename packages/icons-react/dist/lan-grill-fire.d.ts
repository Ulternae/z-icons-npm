import React from 'react';

export interface LanGrillFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillFire: React.FC<LanGrillFireProps>;
export default LanGrillFire;
