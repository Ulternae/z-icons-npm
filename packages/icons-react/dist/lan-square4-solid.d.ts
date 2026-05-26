import React from 'react';

export interface LanSquare4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare4Solid: React.FC<LanSquare4SolidProps>;
export default LanSquare4Solid;
