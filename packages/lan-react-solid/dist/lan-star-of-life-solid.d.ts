import React from 'react';

export interface LanStarOfLifeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarOfLifeSolid(props: LanStarOfLifeSolidProps): React.ReactElement;
export default LanStarOfLifeSolid;
