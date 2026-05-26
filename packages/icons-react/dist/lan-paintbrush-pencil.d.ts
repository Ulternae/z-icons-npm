import React from 'react';

export interface LanPaintbrushPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushPencil: React.FC<LanPaintbrushPencilProps>;
export default LanPaintbrushPencil;
