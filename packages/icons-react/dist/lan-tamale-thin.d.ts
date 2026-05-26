import React from 'react';

export interface LanTamaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTamaleThin: React.FC<LanTamaleThinProps>;
export default LanTamaleThin;
