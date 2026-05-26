import React from 'react';

export interface LanSeatsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatsRegular: React.FC<LanSeatsRegularProps>;
export default LanSeatsRegular;
