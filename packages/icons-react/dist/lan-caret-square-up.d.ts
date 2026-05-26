import React from 'react';

export interface LanCaretSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretSquareUp: React.FC<LanCaretSquareUpProps>;
export default LanCaretSquareUp;
