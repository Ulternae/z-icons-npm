import React from 'react';

export interface LanSquareRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareR: React.FC<LanSquareRProps>;
export default LanSquareR;
