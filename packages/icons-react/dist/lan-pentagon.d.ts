import React from 'react';

export interface LanPentagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPentagon: React.FC<LanPentagonProps>;
export default LanPentagon;
