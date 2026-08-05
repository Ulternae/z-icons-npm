import React from 'react';

export interface LanVialCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialCircleCheckThin(props: LanVialCircleCheckThinProps): React.ReactElement;
export default LanVialCircleCheckThin;
