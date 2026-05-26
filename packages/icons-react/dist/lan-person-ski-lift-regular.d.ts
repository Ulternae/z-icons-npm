import React from 'react';

export interface LanPersonSkiLiftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiLiftRegular: React.FC<LanPersonSkiLiftRegularProps>;
export default LanPersonSkiLiftRegular;
