import React from 'react';

export interface LanFluxCapacitorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluxCapacitorRegular(props: LanFluxCapacitorRegularProps): React.ReactElement;
export default LanFluxCapacitorRegular;
