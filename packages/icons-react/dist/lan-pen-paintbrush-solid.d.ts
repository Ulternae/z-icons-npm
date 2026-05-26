import React from 'react';

export interface LanPenPaintbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenPaintbrushSolid: React.FC<LanPenPaintbrushSolidProps>;
export default LanPenPaintbrushSolid;
