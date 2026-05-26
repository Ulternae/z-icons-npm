import React from 'react';

export interface LanPencilAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilAlt: React.FC<LanPencilAltProps>;
export default LanPencilAlt;
