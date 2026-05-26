import React from 'react';

export interface LanPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPauseSolid: React.FC<LanPauseSolidProps>;
export default LanPauseSolid;
