import React from 'react';

export interface LanFileCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleMinus(props: LanFileCircleMinusProps): React.ReactElement;
export default LanFileCircleMinus;
