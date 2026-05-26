import React from 'react';

export interface LanCaretLargeUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretLargeUp: React.FC<LanCaretLargeUpProps>;
export default LanCaretLargeUp;
