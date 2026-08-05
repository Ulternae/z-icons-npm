import React from 'react';

export interface MinaBaggageClaimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBaggageClaim(props: MinaBaggageClaimProps): React.ReactElement;
export default MinaBaggageClaim;
