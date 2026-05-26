import React from 'react';

export interface LanPuzzlePieceAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceAlt: React.FC<LanPuzzlePieceAltProps>;
export default LanPuzzlePieceAlt;
