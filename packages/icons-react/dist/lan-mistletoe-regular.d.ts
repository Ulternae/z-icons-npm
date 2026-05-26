import React from 'react';

export interface LanMistletoeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMistletoeRegular: React.FC<LanMistletoeRegularProps>;
export default LanMistletoeRegular;
