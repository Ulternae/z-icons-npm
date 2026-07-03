import React from 'react';

export interface BruKeycdnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKeycdn(props: BruKeycdnProps): React.ReactElement;
export default BruKeycdn;
