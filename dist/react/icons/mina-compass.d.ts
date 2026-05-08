import React from 'react';

export interface MinaCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCompass: React.FC<MinaCompassProps>;
export default MinaCompass;
