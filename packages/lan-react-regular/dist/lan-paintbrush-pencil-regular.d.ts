import React from 'react';

export interface LanPaintbrushPencilRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushPencilRegular(props: LanPaintbrushPencilRegularProps): React.ReactElement;
export default LanPaintbrushPencilRegular;
