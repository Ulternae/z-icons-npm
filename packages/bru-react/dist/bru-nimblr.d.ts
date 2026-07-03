import React from 'react';

export interface BruNimblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNimblr(props: BruNimblrProps): React.ReactElement;
export default BruNimblr;
