import React from 'react';

export interface LanCometSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCometSolid: React.FC<LanCometSolidProps>;
export default LanCometSolid;
