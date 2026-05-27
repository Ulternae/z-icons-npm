import React from 'react';

export interface CoreCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompass: React.FC<CoreCompassProps>;
export default CoreCompass;
