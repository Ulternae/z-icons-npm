import React from 'react';

export interface LanPaintbrushPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushPencilSolid: React.FC<LanPaintbrushPencilSolidProps>;
export default LanPaintbrushPencilSolid;
