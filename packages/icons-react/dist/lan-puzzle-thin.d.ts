import React from 'react';

export interface LanPuzzleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPuzzleThin: React.FC<LanPuzzleThinProps>;
export default LanPuzzleThin;
