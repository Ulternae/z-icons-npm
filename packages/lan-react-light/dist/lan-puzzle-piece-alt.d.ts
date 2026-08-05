import React from 'react';

export interface LanPuzzlePieceAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceAlt(props: LanPuzzlePieceAltProps): React.ReactElement;
export default LanPuzzlePieceAlt;
