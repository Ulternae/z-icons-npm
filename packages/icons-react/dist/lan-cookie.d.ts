import React from 'react';

export interface LanCookieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookie: React.FC<LanCookieProps>;
export default LanCookie;
