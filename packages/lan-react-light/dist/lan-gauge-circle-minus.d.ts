import React from 'react';

export interface LanGaugeCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleMinus(props: LanGaugeCircleMinusProps): React.ReactElement;
export default LanGaugeCircleMinus;
