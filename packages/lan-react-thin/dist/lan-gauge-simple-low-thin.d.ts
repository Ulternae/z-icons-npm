import React from 'react';

export interface LanGaugeSimpleLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleLowThin(props: LanGaugeSimpleLowThinProps): React.ReactElement;
export default LanGaugeSimpleLowThin;
