import React from 'react';

export interface LanSquareQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQ: React.FC<LanSquareQProps>;
export default LanSquareQ;
