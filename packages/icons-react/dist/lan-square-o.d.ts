import React from 'react';

export interface LanSquareOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareO: React.FC<LanSquareOProps>;
export default LanSquareO;
