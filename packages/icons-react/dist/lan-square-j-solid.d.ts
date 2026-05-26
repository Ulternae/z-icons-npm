import React from 'react';

export interface LanSquareJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareJSolid: React.FC<LanSquareJSolidProps>;
export default LanSquareJSolid;
