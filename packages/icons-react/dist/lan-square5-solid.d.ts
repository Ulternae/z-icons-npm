import React from 'react';

export interface LanSquare5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare5Solid: React.FC<LanSquare5SolidProps>;
export default LanSquare5Solid;
