import React from 'react';

export interface BruRedditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruReddit(props: BruRedditProps): React.ReactElement;
export default BruReddit;
