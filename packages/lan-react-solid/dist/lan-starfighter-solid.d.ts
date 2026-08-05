import React from 'react';

export interface LanStarfighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarfighterSolid(props: LanStarfighterSolidProps): React.ReactElement;
export default LanStarfighterSolid;
