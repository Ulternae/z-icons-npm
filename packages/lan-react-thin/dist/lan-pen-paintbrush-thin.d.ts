import React from 'react';

export interface LanPenPaintbrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenPaintbrushThin(props: LanPenPaintbrushThinProps): React.ReactElement;
export default LanPenPaintbrushThin;
