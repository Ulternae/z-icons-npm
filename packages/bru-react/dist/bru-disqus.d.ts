import React from 'react';

export interface BruDisqusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDisqus(props: BruDisqusProps): React.ReactElement;
export default BruDisqus;
