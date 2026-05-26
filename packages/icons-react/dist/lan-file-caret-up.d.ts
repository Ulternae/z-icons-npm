import React from 'react';

export interface LanFileCaretUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCaretUp: React.FC<LanFileCaretUpProps>;
export default LanFileCaretUp;
