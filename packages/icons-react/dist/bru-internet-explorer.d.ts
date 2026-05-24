import React from 'react';

export interface BruInternetExplorerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruInternetExplorer: React.FC<BruInternetExplorerProps>;
export default BruInternetExplorer;
