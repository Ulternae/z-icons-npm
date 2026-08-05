import React from 'react';

export interface LanCircleUserCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserCircleCheck(props: LanCircleUserCircleCheckProps): React.ReactElement;
export default LanCircleUserCircleCheck;
