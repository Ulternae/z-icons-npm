import React from 'react';

export interface LanGaugeSimpleLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleLow(props: LanGaugeSimpleLowProps): React.ReactElement;
export default LanGaugeSimpleLow;
