import React from 'react';

export interface LanPenPaintbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenPaintbrush(props: LanPenPaintbrushProps): React.ReactElement;
export default LanPenPaintbrush;
