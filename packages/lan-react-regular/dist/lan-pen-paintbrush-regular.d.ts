import React from 'react';

export interface LanPenPaintbrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenPaintbrushRegular(props: LanPenPaintbrushRegularProps): React.ReactElement;
export default LanPenPaintbrushRegular;
