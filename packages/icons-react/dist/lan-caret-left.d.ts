import React from 'react';

export interface LanCaretLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLeft: React.FC<LanCaretLeftProps>;
export default LanCaretLeft;
