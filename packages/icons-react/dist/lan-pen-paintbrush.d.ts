import React from 'react';

export interface LanPenPaintbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenPaintbrush: React.FC<LanPenPaintbrushProps>;
export default LanPenPaintbrush;
