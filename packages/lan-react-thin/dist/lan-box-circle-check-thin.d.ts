import React from 'react';

export interface LanBoxCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCircleCheckThin(props: LanBoxCircleCheckThinProps): React.ReactElement;
export default LanBoxCircleCheckThin;
