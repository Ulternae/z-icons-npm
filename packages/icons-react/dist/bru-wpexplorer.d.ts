import React from 'react';

export interface BruWpexplorerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWpexplorer: React.FC<BruWpexplorerProps>;
export default BruWpexplorer;
