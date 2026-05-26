import React from 'react';

export interface LanPuzzlePieceAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceAltRegular: React.FC<LanPuzzlePieceAltRegularProps>;
export default LanPuzzlePieceAltRegular;
