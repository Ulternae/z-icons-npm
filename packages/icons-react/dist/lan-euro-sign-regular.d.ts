import React from 'react';

export interface LanEuroSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEuroSignRegular: React.FC<LanEuroSignRegularProps>;
export default LanEuroSignRegular;
