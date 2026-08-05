import React from 'react';

export interface LanStarshipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipSolid(props: LanStarshipSolidProps): React.ReactElement;
export default LanStarshipSolid;
