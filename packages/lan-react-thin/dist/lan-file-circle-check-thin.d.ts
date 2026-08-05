import React from 'react';

export interface LanFileCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleCheckThin(props: LanFileCircleCheckThinProps): React.ReactElement;
export default LanFileCircleCheckThin;
