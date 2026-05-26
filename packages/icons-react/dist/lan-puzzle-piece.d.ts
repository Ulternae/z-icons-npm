import React from 'react';

export interface LanPuzzlePieceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePiece: React.FC<LanPuzzlePieceProps>;
export default LanPuzzlePiece;
