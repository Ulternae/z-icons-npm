import React from 'react';

export interface LanCaretLargeRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLargeRight: React.FC<LanCaretLargeRightProps>;
export default LanCaretLargeRight;
