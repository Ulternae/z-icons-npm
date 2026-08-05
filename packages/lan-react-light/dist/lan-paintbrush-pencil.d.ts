import React from 'react';

export interface LanPaintbrushPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushPencil(props: LanPaintbrushPencilProps): React.ReactElement;
export default LanPaintbrushPencil;
