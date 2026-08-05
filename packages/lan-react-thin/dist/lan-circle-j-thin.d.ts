import React from 'react';

export interface LanCircleJThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleJThin(props: LanCircleJThinProps): React.ReactElement;
export default LanCircleJThin;
