import React from 'react';

export interface LanPaintbrushPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushPencilSolid(props: LanPaintbrushPencilSolidProps): React.ReactElement;
export default LanPaintbrushPencilSolid;
