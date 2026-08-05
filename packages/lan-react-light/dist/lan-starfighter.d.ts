import React from 'react';

export interface LanStarfighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarfighter(props: LanStarfighterProps): React.ReactElement;
export default LanStarfighter;
