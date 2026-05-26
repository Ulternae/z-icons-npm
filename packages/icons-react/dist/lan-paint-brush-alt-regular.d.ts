import React from 'react';

export interface LanPaintBrushAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushAltRegular: React.FC<LanPaintBrushAltRegularProps>;
export default LanPaintBrushAltRegular;
