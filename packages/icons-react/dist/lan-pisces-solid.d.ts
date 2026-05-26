import React from 'react';

export interface LanPiscesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiscesSolid: React.FC<LanPiscesSolidProps>;
export default LanPiscesSolid;
