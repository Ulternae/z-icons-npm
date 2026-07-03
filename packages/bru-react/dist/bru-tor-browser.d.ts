import React from 'react';

export interface BruTorBrowserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTorBrowser(props: BruTorBrowserProps): React.ReactElement;
export default BruTorBrowser;
