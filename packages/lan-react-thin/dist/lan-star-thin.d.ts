import React from 'react';

export interface LanStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarThin(props: LanStarThinProps): React.ReactElement;
export default LanStarThin;
