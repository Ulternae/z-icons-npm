import React from 'react';

export interface LanSquare3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare3Solid: React.FC<LanSquare3SolidProps>;
export default LanSquare3Solid;
