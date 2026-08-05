import React from 'react';

export interface LanStarHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarHalfThin(props: LanStarHalfThinProps): React.ReactElement;
export default LanStarHalfThin;
