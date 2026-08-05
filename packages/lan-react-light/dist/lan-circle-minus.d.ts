import React from 'react';

export interface LanCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMinus(props: LanCircleMinusProps): React.ReactElement;
export default LanCircleMinus;
