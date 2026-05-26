import React from 'react';

export interface LanShoeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoeRegular: React.FC<LanShoeRegularProps>;
export default LanShoeRegular;
