import React from 'react';

export interface LanPenPaintbrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenPaintbrushRegular: React.FC<LanPenPaintbrushRegularProps>;
export default LanPenPaintbrushRegular;
