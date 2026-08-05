import React from 'react';

export interface LanPaintBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushRegular(props: LanPaintBrushRegularProps): React.ReactElement;
export default LanPaintBrushRegular;
