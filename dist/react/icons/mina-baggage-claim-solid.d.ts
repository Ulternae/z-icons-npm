import React from 'react';

export interface MinaBaggageClaimSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBaggageClaimSolid: React.FC<MinaBaggageClaimSolidProps>;
export default MinaBaggageClaimSolid;
