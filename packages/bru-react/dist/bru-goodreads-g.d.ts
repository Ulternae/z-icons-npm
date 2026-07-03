import React from 'react';

export interface BruGoodreadsGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoodreadsG(props: BruGoodreadsGProps): React.ReactElement;
export default BruGoodreadsG;
