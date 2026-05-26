import React from 'react';

export interface LanCaretUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretUp: React.FC<LanCaretUpProps>;
export default LanCaretUp;
