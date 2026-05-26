import React from 'react';

export interface LanSingleQuoteLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSingleQuoteLeft: React.FC<LanSingleQuoteLeftProps>;
export default LanSingleQuoteLeft;
