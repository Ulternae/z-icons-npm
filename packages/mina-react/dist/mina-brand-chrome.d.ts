import React from 'react';

export interface MinaBrandChromeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandChrome(props: MinaBrandChromeProps): React.ReactElement;
export default MinaBrandChrome;
