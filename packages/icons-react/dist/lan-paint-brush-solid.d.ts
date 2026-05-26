import React from 'react';

export interface LanPaintBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintBrushSolid: React.FC<LanPaintBrushSolidProps>;
export default LanPaintBrushSolid;
