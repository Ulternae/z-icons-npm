import React from 'react';

export interface LanCaretRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretRight: React.FC<LanCaretRightProps>;
export default LanCaretRight;
