import React from 'react';

export interface BruSquareTumblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareTumblr(props: BruSquareTumblrProps): React.ReactElement;
export default BruSquareTumblr;
