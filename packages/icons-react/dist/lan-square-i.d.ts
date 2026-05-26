import React from 'react';

export interface LanSquareIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareI: React.FC<LanSquareIProps>;
export default LanSquareI;
