import React from 'react';

export interface LanSquareKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareK: React.FC<LanSquareKProps>;
export default LanSquareK;
