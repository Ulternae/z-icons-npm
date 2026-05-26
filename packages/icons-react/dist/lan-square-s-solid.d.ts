import React from 'react';

export interface LanSquareSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSSolid: React.FC<LanSquareSSolidProps>;
export default LanSquareSSolid;
