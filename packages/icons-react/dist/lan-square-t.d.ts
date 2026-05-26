import React from 'react';

export interface LanSquareTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareT: React.FC<LanSquareTProps>;
export default LanSquareT;
