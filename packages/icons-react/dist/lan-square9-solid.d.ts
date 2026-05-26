import React from 'react';

export interface LanSquare9SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare9Solid: React.FC<LanSquare9SolidProps>;
export default LanSquare9Solid;
