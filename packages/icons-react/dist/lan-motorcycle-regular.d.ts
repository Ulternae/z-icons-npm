import React from 'react';

export interface LanMotorcycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMotorcycleRegular: React.FC<LanMotorcycleRegularProps>;
export default LanMotorcycleRegular;
