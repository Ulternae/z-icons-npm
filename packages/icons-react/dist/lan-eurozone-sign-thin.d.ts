import React from 'react';

export interface LanEurozoneSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEurozoneSignThin: React.FC<LanEurozoneSignThinProps>;
export default LanEurozoneSignThin;
