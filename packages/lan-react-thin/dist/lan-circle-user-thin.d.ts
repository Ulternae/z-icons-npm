import React from 'react';

export interface LanCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserThin(props: LanCircleUserThinProps): React.ReactElement;
export default LanCircleUserThin;
