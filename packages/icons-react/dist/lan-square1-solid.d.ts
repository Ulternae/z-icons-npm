import React from 'react';

export interface LanSquare1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare1Solid: React.FC<LanSquare1SolidProps>;
export default LanSquare1Solid;
