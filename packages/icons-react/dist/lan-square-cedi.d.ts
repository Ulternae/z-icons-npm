import React from 'react';

export interface LanSquareCediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCedi: React.FC<LanSquareCediProps>;
export default LanSquareCedi;
