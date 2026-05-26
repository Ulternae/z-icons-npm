import React from 'react';

export interface LanPanoramaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanoramaSolid: React.FC<LanPanoramaSolidProps>;
export default LanPanoramaSolid;
