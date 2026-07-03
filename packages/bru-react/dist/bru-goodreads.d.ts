import React from 'react';

export interface BruGoodreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoodreads(props: BruGoodreadsProps): React.ReactElement;
export default BruGoodreads;
