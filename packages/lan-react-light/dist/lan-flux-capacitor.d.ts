import React from 'react';

export interface LanFluxCapacitorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluxCapacitor(props: LanFluxCapacitorProps): React.ReactElement;
export default LanFluxCapacitor;
