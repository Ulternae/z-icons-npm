import React from 'react';

export interface LanCookieBiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookieBiteThin: React.FC<LanCookieBiteThinProps>;
export default LanCookieBiteThin;
