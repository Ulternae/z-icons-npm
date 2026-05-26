import React from 'react';

export interface LanTreeChristmasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeChristmasRegular: React.FC<LanTreeChristmasRegularProps>;
export default LanTreeChristmasRegular;
