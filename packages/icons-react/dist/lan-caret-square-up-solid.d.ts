import React from 'react';

export interface LanCaretSquareUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareUpSolid: React.FC<LanCaretSquareUpSolidProps>;
export default LanCaretSquareUpSolid;
