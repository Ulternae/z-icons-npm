import React from 'react';

export interface LanPuzzlePieceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePiece(props: LanPuzzlePieceProps): React.ReactElement;
export default LanPuzzlePiece;
