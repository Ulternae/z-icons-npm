import React from 'react';

export interface LanPuzzlePieceAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceAltSolid(props: LanPuzzlePieceAltSolidProps): React.ReactElement;
export default LanPuzzlePieceAltSolid;
