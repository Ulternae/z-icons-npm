import React from 'react';

export interface LanCaretSquareLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareLeft: React.FC<LanCaretSquareLeftProps>;
export default LanCaretSquareLeft;
