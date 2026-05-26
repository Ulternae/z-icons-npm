import React from 'react';

export interface LanCaretCircleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretCircleRight: React.FC<LanCaretCircleRightProps>;
export default LanCaretCircleRight;
