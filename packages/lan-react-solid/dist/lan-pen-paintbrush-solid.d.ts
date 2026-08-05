import React from 'react';

export interface LanPenPaintbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenPaintbrushSolid(props: LanPenPaintbrushSolidProps): React.ReactElement;
export default LanPenPaintbrushSolid;
