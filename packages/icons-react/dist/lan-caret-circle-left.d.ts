import React from 'react';

export interface LanCaretCircleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretCircleLeft: React.FC<LanCaretCircleLeftProps>;
export default LanCaretCircleLeft;
