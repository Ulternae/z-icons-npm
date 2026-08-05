import React from 'react';

export interface LanImageCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCircleCheckThin(props: LanImageCircleCheckThinProps): React.ReactElement;
export default LanImageCircleCheckThin;
