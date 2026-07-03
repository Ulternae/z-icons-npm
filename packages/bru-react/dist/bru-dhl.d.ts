import React from 'react';

export interface BruDhlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDhl(props: BruDhlProps): React.ReactElement;
export default BruDhl;
