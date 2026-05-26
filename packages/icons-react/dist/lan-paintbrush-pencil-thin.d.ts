import React from 'react';

export interface LanPaintbrushPencilThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushPencilThin: React.FC<LanPaintbrushPencilThinProps>;
export default LanPaintbrushPencilThin;
