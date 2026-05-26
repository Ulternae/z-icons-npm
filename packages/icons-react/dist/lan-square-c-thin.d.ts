import React from 'react';

export interface LanSquareCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCThin: React.FC<LanSquareCThinProps>;
export default LanSquareCThin;
