import React from 'react';

export interface BruSquareDeskproProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareDeskpro(props: BruSquareDeskproProps): React.ReactElement;
export default BruSquareDeskpro;
