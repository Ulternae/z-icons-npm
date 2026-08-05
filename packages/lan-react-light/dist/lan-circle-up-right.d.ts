import React from 'react';

export interface LanCircleUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUpRight(props: LanCircleUpRightProps): React.ReactElement;
export default LanCircleUpRight;
