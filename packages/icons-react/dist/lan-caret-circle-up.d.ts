import React from 'react';

export interface LanCaretCircleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretCircleUp: React.FC<LanCaretCircleUpProps>;
export default LanCaretCircleUp;
