import React from 'react';

export interface LanPuzzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzleSolid: React.FC<LanPuzzleSolidProps>;
export default LanPuzzleSolid;
