import React from 'react';

export interface MinaBrandThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandThreads(props: MinaBrandThreadsProps): React.ReactElement;
export default MinaBrandThreads;
