import React from 'react';

export interface LanUserCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCircleMinus(props: LanUserCircleMinusProps): React.ReactElement;
export default LanUserCircleMinus;
