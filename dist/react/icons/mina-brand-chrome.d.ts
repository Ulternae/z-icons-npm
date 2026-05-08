import React from 'react';

export interface MinaBrandChromeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandChrome: React.FC<MinaBrandChromeProps>;
export default MinaBrandChrome;
