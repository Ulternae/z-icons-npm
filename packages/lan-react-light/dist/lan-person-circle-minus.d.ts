import React from 'react';

export interface LanPersonCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleMinus(props: LanPersonCircleMinusProps): React.ReactElement;
export default LanPersonCircleMinus;
