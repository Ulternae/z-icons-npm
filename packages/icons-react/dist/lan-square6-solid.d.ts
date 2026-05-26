import React from 'react';

export interface LanSquare6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare6Solid: React.FC<LanSquare6SolidProps>;
export default LanSquare6Solid;
