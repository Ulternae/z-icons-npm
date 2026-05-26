import React from 'react';

export interface LanCaretCircleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretCircleDown: React.FC<LanCaretCircleDownProps>;
export default LanCaretCircleDown;
