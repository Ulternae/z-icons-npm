import React from 'react';

export interface BruFirefoxBrowserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFirefoxBrowser(props: BruFirefoxBrowserProps): React.ReactElement;
export default BruFirefoxBrowser;
