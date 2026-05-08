import React from 'react';

export interface MinaCookieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCookie: React.FC<MinaCookieProps>;
export default MinaCookie;
