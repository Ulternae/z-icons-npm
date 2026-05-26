import React from 'react';

export interface LanPuzzlePieceAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceAltSolid: React.FC<LanPuzzlePieceAltSolidProps>;
export default LanPuzzlePieceAltSolid;
