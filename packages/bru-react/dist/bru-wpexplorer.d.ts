import React from 'react';

export interface BruWpexplorerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWpexplorer(props: BruWpexplorerProps): React.ReactElement;
export default BruWpexplorer;
