import React from 'react';

export interface LanPenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenCircleSolid: React.FC<LanPenCircleSolidProps>;
export default LanPenCircleSolid;
