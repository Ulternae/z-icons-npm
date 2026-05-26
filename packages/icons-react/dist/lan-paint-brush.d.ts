import React from 'react';

export interface LanPaintBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrush: React.FC<LanPaintBrushProps>;
export default LanPaintBrush;
