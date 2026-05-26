import React from 'react';

export interface LanPenPaintbrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenPaintbrushThin: React.FC<LanPenPaintbrushThinProps>;
export default LanPenPaintbrushThin;
