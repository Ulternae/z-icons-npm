import React from 'react';

export interface BruSquareRedditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareReddit(props: BruSquareRedditProps): React.ReactElement;
export default BruSquareReddit;
