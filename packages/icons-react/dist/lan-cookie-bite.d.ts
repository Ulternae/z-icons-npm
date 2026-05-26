import React from 'react';

export interface LanCookieBiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookieBite: React.FC<LanCookieBiteProps>;
export default LanCookieBite;
