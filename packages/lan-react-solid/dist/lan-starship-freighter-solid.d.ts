import React from 'react';

export interface LanStarshipFreighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipFreighterSolid(props: LanStarshipFreighterSolidProps): React.ReactElement;
export default LanStarshipFreighterSolid;
