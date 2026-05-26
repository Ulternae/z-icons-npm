import React from 'react';

export interface LanCaretSquareRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareRight: React.FC<LanCaretSquareRightProps>;
export default LanCaretSquareRight;
