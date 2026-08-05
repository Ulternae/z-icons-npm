import React from 'react';

export interface MinaBaggageClaimSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBaggageClaimSolid(props: MinaBaggageClaimSolidProps): React.ReactElement;
export default MinaBaggageClaimSolid;
