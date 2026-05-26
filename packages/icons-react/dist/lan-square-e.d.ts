import React from 'react';

export interface LanSquareEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareE: React.FC<LanSquareEProps>;
export default LanSquareE;
