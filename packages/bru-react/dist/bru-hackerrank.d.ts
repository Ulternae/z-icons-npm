import React from 'react';

export interface BruHackerrankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHackerrank(props: BruHackerrankProps): React.ReactElement;
export default BruHackerrank;
