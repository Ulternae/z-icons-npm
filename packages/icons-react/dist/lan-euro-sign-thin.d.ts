import React from 'react';

export interface LanEuroSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEuroSignThin: React.FC<LanEuroSignThinProps>;
export default LanEuroSignThin;
