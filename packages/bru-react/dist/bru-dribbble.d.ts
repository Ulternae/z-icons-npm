import React from 'react';

export interface BruDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDribbble(props: BruDribbbleProps): React.ReactElement;
export default BruDribbble;
