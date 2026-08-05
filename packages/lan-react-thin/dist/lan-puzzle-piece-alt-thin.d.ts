import React from 'react';

export interface LanPuzzlePieceAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceAltThin(props: LanPuzzlePieceAltThinProps): React.ReactElement;
export default LanPuzzlePieceAltThin;
