import React from 'react';

export interface LanPaintBrushAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushAltThin(props: LanPaintBrushAltThinProps): React.ReactElement;
export default LanPaintBrushAltThin;
