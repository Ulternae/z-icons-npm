import React from 'react';

export interface BruChromecastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruChromecast: React.FC<BruChromecastProps>;
export default BruChromecast;
