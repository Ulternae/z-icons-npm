import React from 'react';

export interface LanCaretSquareUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareUpThin: React.FC<LanCaretSquareUpThinProps>;
export default LanCaretSquareUpThin;
