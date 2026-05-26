import React from 'react';

export interface LanPeanutsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutsSolid: React.FC<LanPeanutsSolidProps>;
export default LanPeanutsSolid;
