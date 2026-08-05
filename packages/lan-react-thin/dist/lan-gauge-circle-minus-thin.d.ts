import React from 'react';

export interface LanGaugeCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleMinusThin(props: LanGaugeCircleMinusThinProps): React.ReactElement;
export default LanGaugeCircleMinusThin;
