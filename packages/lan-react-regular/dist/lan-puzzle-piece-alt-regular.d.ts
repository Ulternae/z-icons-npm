import React from 'react';

export interface LanPuzzlePieceAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceAltRegular(props: LanPuzzlePieceAltRegularProps): React.ReactElement;
export default LanPuzzlePieceAltRegular;
