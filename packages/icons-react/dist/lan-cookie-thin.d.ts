import React from 'react';

export interface LanCookieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookieThin: React.FC<LanCookieThinProps>;
export default LanCookieThin;
