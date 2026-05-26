import React from 'react';

export interface LanOctagonCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonCheckThin: React.FC<LanOctagonCheckThinProps>;
export default LanOctagonCheckThin;
