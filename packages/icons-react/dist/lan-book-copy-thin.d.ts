import React from 'react';

export interface LanBookCopyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookCopyThin: React.FC<LanBookCopyThinProps>;
export default LanBookCopyThin;
