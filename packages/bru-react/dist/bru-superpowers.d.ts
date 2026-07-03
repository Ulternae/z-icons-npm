import React from 'react';

export interface BruSuperpowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSuperpowers(props: BruSuperpowersProps): React.ReactElement;
export default BruSuperpowers;
