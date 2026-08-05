import React from 'react';

export interface LanPuzzleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzleRegular(props: LanPuzzleRegularProps): React.ReactElement;
export default LanPuzzleRegular;
