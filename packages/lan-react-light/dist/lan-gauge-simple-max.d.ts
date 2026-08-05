import React from 'react';

export interface LanGaugeSimpleMaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMax(props: LanGaugeSimpleMaxProps): React.ReactElement;
export default LanGaugeSimpleMax;
