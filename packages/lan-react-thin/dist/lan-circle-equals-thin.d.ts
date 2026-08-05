import React from 'react';

export interface LanCircleEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEqualsThin(props: LanCircleEqualsThinProps): React.ReactElement;
export default LanCircleEqualsThin;
