import React from 'react';

export interface BruChromeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruChrome: React.FC<BruChromeProps>;
export default BruChrome;
