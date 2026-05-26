import React from 'react';

export interface LanCaretLargeDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLargeDown: React.FC<LanCaretLargeDownProps>;
export default LanCaretLargeDown;
