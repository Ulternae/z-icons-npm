import React from 'react';

export interface LanStarShootingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarShootingSolid(props: LanStarShootingSolidProps): React.ReactElement;
export default LanStarShootingSolid;
