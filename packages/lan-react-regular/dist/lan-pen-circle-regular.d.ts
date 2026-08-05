import React from 'react';

export interface LanPenCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenCircleRegular(props: LanPenCircleRegularProps): React.ReactElement;
export default LanPenCircleRegular;
