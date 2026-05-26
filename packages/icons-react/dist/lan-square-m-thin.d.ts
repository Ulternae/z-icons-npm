import React from 'react';

export interface LanSquareMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMThin: React.FC<LanSquareMThinProps>;
export default LanSquareMThin;
