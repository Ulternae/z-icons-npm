import React from 'react';

export interface LanPaintBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrush(props: LanPaintBrushProps): React.ReactElement;
export default LanPaintBrush;
