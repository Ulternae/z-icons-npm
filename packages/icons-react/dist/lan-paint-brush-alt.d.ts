import React from 'react';

export interface LanPaintBrushAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushAlt: React.FC<LanPaintBrushAltProps>;
export default LanPaintBrushAlt;
