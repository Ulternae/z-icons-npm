import React from 'react';

export interface LanCaretRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretRightThin: React.FC<LanCaretRightThinProps>;
export default LanCaretRightThin;
