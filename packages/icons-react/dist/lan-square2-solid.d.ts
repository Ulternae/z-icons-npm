import React from 'react';

export interface LanSquare2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare2Solid: React.FC<LanSquare2SolidProps>;
export default LanSquare2Solid;
