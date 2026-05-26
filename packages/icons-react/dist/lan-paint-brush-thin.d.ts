import React from 'react';

export interface LanPaintBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushThin: React.FC<LanPaintBrushThinProps>;
export default LanPaintBrushThin;
