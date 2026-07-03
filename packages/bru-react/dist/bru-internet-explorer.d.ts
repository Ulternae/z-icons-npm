import React from 'react';

export interface BruInternetExplorerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruInternetExplorer(props: BruInternetExplorerProps): React.ReactElement;
export default BruInternetExplorer;
