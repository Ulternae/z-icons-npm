import React from 'react';

export interface LanPersonWalkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalkingThin(props: LanPersonWalkingThinProps): React.ReactElement;
export default LanPersonWalkingThin;
