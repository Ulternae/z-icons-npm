import React from 'react';

export interface LanCaretLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLeftThin: React.FC<LanCaretLeftThinProps>;
export default LanCaretLeftThin;
