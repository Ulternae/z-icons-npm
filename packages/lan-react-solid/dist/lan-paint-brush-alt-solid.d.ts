import React from 'react';

export interface LanPaintBrushAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintBrushAltSolid(props: LanPaintBrushAltSolidProps): React.ReactElement;
export default LanPaintBrushAltSolid;
