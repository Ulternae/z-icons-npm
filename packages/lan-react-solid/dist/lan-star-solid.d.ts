import React from 'react';

export interface LanStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSolid(props: LanStarSolidProps): React.ReactElement;
export default LanStarSolid;
