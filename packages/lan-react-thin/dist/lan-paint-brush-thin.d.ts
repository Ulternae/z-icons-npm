import React from 'react';

export interface LanPaintBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushThin(props: LanPaintBrushThinProps): React.ReactElement;
export default LanPaintBrushThin;
