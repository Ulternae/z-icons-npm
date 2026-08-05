import React from 'react';

export interface LanCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMinusThin(props: LanCircleMinusThinProps): React.ReactElement;
export default LanCircleMinusThin;
