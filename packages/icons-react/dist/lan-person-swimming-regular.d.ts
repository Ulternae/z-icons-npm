import React from 'react';

export interface LanPersonSwimmingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingRegular: React.FC<LanPersonSwimmingRegularProps>;
export default LanPersonSwimmingRegular;
