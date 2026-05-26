import React from 'react';

export interface LanPuzzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzle: React.FC<LanPuzzleProps>;
export default LanPuzzle;
