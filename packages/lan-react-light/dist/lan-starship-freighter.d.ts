import React from 'react';

export interface LanStarshipFreighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipFreighter(props: LanStarshipFreighterProps): React.ReactElement;
export default LanStarshipFreighter;
