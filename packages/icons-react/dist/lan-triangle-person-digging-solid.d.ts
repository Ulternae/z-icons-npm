import React from 'react';

export interface LanTrianglePersonDiggingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrianglePersonDiggingSolid: React.FC<LanTrianglePersonDiggingSolidProps>;
export default LanTrianglePersonDiggingSolid;
