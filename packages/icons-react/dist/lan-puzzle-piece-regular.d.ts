import React from 'react';

export interface LanPuzzlePieceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceRegular: React.FC<LanPuzzlePieceRegularProps>;
export default LanPuzzlePieceRegular;
