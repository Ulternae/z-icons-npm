import React from 'react';

export interface LanChessRookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRook: React.FC<LanChessRookProps>;
export default LanChessRook;
