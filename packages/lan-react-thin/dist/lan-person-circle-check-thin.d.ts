import React from 'react';

export interface LanPersonCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleCheckThin(props: LanPersonCircleCheckThinProps): React.ReactElement;
export default LanPersonCircleCheckThin;
