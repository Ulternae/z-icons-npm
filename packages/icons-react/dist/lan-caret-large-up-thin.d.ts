import React from 'react';

export interface LanCaretLargeUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLargeUpThin: React.FC<LanCaretLargeUpThinProps>;
export default LanCaretLargeUpThin;
