import React from 'react';

export interface BruSquareThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareThreads(props: BruSquareThreadsProps): React.ReactElement;
export default BruSquareThreads;
