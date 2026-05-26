import React from 'react';

export interface LanPersonSkiingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiingRegular: React.FC<LanPersonSkiingRegularProps>;
export default LanPersonSkiingRegular;
