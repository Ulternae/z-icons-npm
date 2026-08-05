import React from 'react';

export interface LanCircleHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalf(props: LanCircleHalfProps): React.ReactElement;
export default LanCircleHalf;
