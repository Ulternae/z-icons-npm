import React from 'react';

export interface BruVenmoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVenmo(props: BruVenmoProps): React.ReactElement;
export default BruVenmo;
