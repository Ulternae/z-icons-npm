import React from 'react';

export interface LanPaintBrushAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushAlt(props: LanPaintBrushAltProps): React.ReactElement;
export default LanPaintBrushAlt;
