import React from 'react';

export interface LanStarshipFreighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipFreighterThin(props: LanStarshipFreighterThinProps): React.ReactElement;
export default LanStarshipFreighterThin;
