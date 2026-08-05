import React from 'react';

export interface LanCircleStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStarThin(props: LanCircleStarThinProps): React.ReactElement;
export default LanCircleStarThin;
