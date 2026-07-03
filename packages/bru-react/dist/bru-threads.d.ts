import React from 'react';

export interface BruThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruThreads(props: BruThreadsProps): React.ReactElement;
export default BruThreads;
