import React from 'react';

export interface BruAirbnbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAirbnb(props: BruAirbnbProps): React.ReactElement;
export default BruAirbnb;
