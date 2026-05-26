import React from 'react';

export interface LanPuzzlePieceAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceAltThin: React.FC<LanPuzzlePieceAltThinProps>;
export default LanPuzzlePieceAltThin;
