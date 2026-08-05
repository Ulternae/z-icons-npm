import React from 'react';

export interface LanPlugCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleCheckThin(props: LanPlugCircleCheckThinProps): React.ReactElement;
export default LanPlugCircleCheckThin;
