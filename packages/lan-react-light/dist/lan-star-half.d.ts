import React from 'react';

export interface LanStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarHalf(props: LanStarHalfProps): React.ReactElement;
export default LanStarHalf;
