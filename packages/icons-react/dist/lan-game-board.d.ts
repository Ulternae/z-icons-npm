import React from 'react';

export interface LanGameBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoard: React.FC<LanGameBoardProps>;
export default LanGameBoard;
