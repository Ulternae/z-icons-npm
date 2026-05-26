import React from 'react';

export interface LanSquare8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare8Solid: React.FC<LanSquare8SolidProps>;
export default LanSquare8Solid;
