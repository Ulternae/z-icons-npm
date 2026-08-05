import React from 'react';

export interface LanPlugCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleMinus(props: LanPlugCircleMinusProps): React.ReactElement;
export default LanPlugCircleMinus;
