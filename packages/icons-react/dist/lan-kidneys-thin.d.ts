import React from 'react';

export interface LanKidneysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKidneysThin: React.FC<LanKidneysThinProps>;
export default LanKidneysThin;
