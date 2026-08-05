import React from 'react';

export interface LanPuzzlePieceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceRegular(props: LanPuzzlePieceRegularProps): React.ReactElement;
export default LanPuzzlePieceRegular;
