import React from 'react';

export interface LanEuroSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEuroSign: React.FC<LanEuroSignProps>;
export default LanEuroSign;
