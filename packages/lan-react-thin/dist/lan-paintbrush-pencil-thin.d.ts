import React from 'react';

export interface LanPaintbrushPencilThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushPencilThin(props: LanPaintbrushPencilThinProps): React.ReactElement;
export default LanPaintbrushPencilThin;
