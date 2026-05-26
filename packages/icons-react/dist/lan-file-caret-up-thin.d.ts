import React from 'react';

export interface LanFileCaretUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCaretUpThin: React.FC<LanFileCaretUpThinProps>;
export default LanFileCaretUpThin;
