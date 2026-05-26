import React from 'react';

export interface LanChessBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBoard: React.FC<LanChessBoardProps>;
export default LanChessBoard;
