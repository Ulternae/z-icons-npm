import React from 'react';

export interface LanCaretLargeLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLargeLeft: React.FC<LanCaretLargeLeftProps>;
export default LanCaretLargeLeft;
