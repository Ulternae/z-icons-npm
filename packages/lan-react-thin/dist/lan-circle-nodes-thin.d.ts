import React from 'react';

export interface LanCircleNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNodesThin(props: LanCircleNodesThinProps): React.ReactElement;
export default LanCircleNodesThin;
