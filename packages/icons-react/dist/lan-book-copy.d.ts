import React from 'react';

export interface LanBookCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookCopy: React.FC<LanBookCopyProps>;
export default LanBookCopy;
