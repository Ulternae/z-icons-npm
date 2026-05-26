import React from 'react';

export interface LanPuzzlePieceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzlePieceSolid: React.FC<LanPuzzlePieceSolidProps>;
export default LanPuzzlePieceSolid;
