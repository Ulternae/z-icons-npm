import React from 'react';

export interface LanCircleHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfThin(props: LanCircleHalfThinProps): React.ReactElement;
export default LanCircleHalfThin;
