import React from 'react';

export interface LanSquare7SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare7Solid: React.FC<LanSquare7SolidProps>;
export default LanSquare7Solid;
