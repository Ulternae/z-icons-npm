import React from 'react';

export interface BruChromeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruChrome(props: BruChromeProps): React.ReactElement;
export default BruChrome;
