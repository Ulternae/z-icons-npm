import React from 'react';

export interface LanStarAndCrescentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarAndCrescentThin(props: LanStarAndCrescentThinProps): React.ReactElement;
export default LanStarAndCrescentThin;
