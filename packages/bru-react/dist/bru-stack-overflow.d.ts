import React from 'react';

export interface BruStackOverflowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStackOverflow(props: BruStackOverflowProps): React.ReactElement;
export default BruStackOverflow;
