import React from 'react';

export interface BruVenmoVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVenmoV(props: BruVenmoVProps): React.ReactElement;
export default BruVenmoV;
