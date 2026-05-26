import React from 'react';

export interface LanChessQueenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueen: React.FC<LanChessQueenProps>;
export default LanChessQueen;
