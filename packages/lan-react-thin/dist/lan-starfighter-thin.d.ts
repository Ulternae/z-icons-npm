import React from 'react';

export interface LanStarfighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarfighterThin(props: LanStarfighterThinProps): React.ReactElement;
export default LanStarfighterThin;
