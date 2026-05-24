import React from 'react';

export interface BruTorBrowserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTorBrowser: React.FC<BruTorBrowserProps>;
export default BruTorBrowser;
