import React from 'react';

export interface MinaCookieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCookieSolid: React.FC<MinaCookieSolidProps>;
export default MinaCookieSolid;
