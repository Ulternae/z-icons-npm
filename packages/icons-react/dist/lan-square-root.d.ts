import React from 'react';

export interface LanSquareRootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRoot: React.FC<LanSquareRootProps>;
export default LanSquareRoot;
