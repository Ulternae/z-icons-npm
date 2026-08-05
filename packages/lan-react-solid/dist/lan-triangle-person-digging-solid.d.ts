import React from 'react';

export interface LanTrianglePersonDiggingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrianglePersonDiggingSolid(props: LanTrianglePersonDiggingSolidProps): React.ReactElement;
export default LanTrianglePersonDiggingSolid;
