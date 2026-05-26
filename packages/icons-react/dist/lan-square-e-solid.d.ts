import React from 'react';

export interface LanSquareESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareESolid: React.FC<LanSquareESolidProps>;
export default LanSquareESolid;
