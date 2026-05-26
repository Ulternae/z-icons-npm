import React from 'react';

export interface LanPaintbrushPencilRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushPencilRegular: React.FC<LanPaintbrushPencilRegularProps>;
export default LanPaintbrushPencilRegular;
