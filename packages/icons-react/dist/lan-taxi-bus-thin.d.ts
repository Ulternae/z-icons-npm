import React from 'react';

export interface LanTaxiBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaxiBusThin: React.FC<LanTaxiBusThinProps>;
export default LanTaxiBusThin;
