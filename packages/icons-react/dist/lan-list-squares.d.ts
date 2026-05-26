import React from 'react';

export interface LanListSquaresProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListSquares: React.FC<LanListSquaresProps>;
export default LanListSquares;
