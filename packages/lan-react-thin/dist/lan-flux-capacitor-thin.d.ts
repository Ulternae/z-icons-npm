import React from 'react';

export interface LanFluxCapacitorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluxCapacitorThin(props: LanFluxCapacitorThinProps): React.ReactElement;
export default LanFluxCapacitorThin;
