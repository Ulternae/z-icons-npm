import React from 'react';

export interface BruTumblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTumblr(props: BruTumblrProps): React.ReactElement;
export default BruTumblr;
