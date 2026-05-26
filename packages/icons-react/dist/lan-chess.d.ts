import React from 'react';

export interface LanChessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChess: React.FC<LanChessProps>;
export default LanChess;
