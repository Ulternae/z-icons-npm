import React from 'react';

export interface MinaBaggageClaimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBaggageClaim: React.FC<MinaBaggageClaimProps>;
export default MinaBaggageClaim;
