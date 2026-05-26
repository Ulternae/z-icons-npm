import React from 'react';

export interface LanBookCopyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookCopyRegular: React.FC<LanBookCopyRegularProps>;
export default LanBookCopyRegular;
