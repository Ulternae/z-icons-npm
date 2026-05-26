import React from 'react';

export interface LanCastleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCastleSolid: React.FC<LanCastleSolidProps>;
export default LanCastleSolid;
