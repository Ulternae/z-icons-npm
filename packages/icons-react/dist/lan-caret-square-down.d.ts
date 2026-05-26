import React from 'react';

export interface LanCaretSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareDown: React.FC<LanCaretSquareDownProps>;
export default LanCaretSquareDown;
