import React from 'react';

export interface LanCaretUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretUpThin: React.FC<LanCaretUpThinProps>;
export default LanCaretUpThin;
