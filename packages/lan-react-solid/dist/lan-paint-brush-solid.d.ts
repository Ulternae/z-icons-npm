import React from 'react';

export interface LanPaintBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushSolid(props: LanPaintBrushSolidProps): React.ReactElement;
export default LanPaintBrushSolid;
