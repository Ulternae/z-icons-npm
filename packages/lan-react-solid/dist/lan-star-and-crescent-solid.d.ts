import React from 'react';

export interface LanStarAndCrescentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarAndCrescentSolid(props: LanStarAndCrescentSolidProps): React.ReactElement;
export default LanStarAndCrescentSolid;
