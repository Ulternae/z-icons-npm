import React from 'react';

export interface LanOctagonDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonDivideThin: React.FC<LanOctagonDivideThinProps>;
export default LanOctagonDivideThin;
