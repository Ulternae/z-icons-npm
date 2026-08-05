import React from 'react';

export interface LanCircleNotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNotchThin(props: LanCircleNotchThinProps): React.ReactElement;
export default LanCircleNotchThin;
