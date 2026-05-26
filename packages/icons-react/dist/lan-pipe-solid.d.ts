import React from 'react';

export interface LanPipeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSolid: React.FC<LanPipeSolidProps>;
export default LanPipeSolid;
