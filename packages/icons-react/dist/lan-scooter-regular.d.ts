import React from 'react';

export interface LanScooterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScooterRegular: React.FC<LanScooterRegularProps>;
export default LanScooterRegular;
