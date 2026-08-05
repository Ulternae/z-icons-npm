import React from 'react';

export interface LanPlugCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleMinusThin(props: LanPlugCircleMinusThinProps): React.ReactElement;
export default LanPlugCircleMinusThin;
