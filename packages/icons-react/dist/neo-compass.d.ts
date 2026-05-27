import React from 'react';

export interface NeoCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompass: React.FC<NeoCompassProps>;
export default NeoCompass;
