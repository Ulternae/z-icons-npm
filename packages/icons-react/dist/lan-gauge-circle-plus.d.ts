import React from 'react';

export interface LanGaugeCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCirclePlus: React.FC<LanGaugeCirclePlusProps>;
export default LanGaugeCirclePlus;
