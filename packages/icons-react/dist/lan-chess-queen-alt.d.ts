import React from 'react';

export interface LanChessQueenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenAlt: React.FC<LanChessQueenAltProps>;
export default LanChessQueenAlt;
