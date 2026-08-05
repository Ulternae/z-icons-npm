import React from 'react';

export interface LanFileCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleMinusThin(props: LanFileCircleMinusThinProps): React.ReactElement;
export default LanFileCircleMinusThin;
