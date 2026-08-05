import React from 'react';

export interface LanCircleShareNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShareNodesThin(props: LanCircleShareNodesThinProps): React.ReactElement;
export default LanCircleShareNodesThin;
