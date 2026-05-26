import React from 'react';

export interface LanPaintBrushAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushAltThin: React.FC<LanPaintBrushAltThinProps>;
export default LanPaintBrushAltThin;
