import React from 'react';

export interface LanGaugeSimpleLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleLowRegular: React.FC<LanGaugeSimpleLowRegularProps>;
export default LanGaugeSimpleLowRegular;
