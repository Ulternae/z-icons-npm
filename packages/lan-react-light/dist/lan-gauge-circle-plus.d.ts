import React from 'react';

export interface LanGaugeCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCirclePlus(props: LanGaugeCirclePlusProps): React.ReactElement;
export default LanGaugeCirclePlus;
