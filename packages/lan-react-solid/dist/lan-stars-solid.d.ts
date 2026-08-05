import React from 'react';

export interface LanStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarsSolid(props: LanStarsSolidProps): React.ReactElement;
export default LanStarsSolid;
