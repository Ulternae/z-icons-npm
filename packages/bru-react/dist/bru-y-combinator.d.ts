import React from 'react';

export interface BruYCombinatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYCombinator(props: BruYCombinatorProps): React.ReactElement;
export default BruYCombinator;
