import React from 'react';

export interface BruSquareDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareDribbble(props: BruSquareDribbbleProps): React.ReactElement;
export default BruSquareDribbble;
