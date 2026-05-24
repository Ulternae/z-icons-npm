import React from 'react';

export interface BruStackpathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStackpath: React.FC<BruStackpathProps>;
export default BruStackpath;
