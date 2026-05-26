import React from 'react';

export interface LanUsdSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdSquareThin: React.FC<LanUsdSquareThinProps>;
export default LanUsdSquareThin;
