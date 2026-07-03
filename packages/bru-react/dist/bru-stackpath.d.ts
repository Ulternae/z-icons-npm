import React from 'react';

export interface BruStackpathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStackpath(props: BruStackpathProps): React.ReactElement;
export default BruStackpath;
