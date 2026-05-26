import React from 'react';

export interface LanDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDivideThin: React.FC<LanDivideThinProps>;
export default LanDivideThin;
