import React from 'react';

export interface LanFluxCapacitorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluxCapacitorSolid(props: LanFluxCapacitorSolidProps): React.ReactElement;
export default LanFluxCapacitorSolid;
