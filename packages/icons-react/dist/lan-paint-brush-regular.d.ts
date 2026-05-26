import React from 'react';

export interface LanPaintBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushRegular: React.FC<LanPaintBrushRegularProps>;
export default LanPaintBrushRegular;
