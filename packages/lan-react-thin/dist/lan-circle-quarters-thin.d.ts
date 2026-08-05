import React from 'react';

export interface LanCircleQuartersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuartersThin(props: LanCircleQuartersThinProps): React.ReactElement;
export default LanCircleQuartersThin;
