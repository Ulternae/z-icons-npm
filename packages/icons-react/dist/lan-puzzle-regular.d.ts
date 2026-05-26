import React from 'react';

export interface LanPuzzleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzleRegular: React.FC<LanPuzzleRegularProps>;
export default LanPuzzleRegular;
