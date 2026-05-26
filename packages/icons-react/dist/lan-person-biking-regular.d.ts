import React from 'react';

export interface LanPersonBikingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBikingRegular: React.FC<LanPersonBikingRegularProps>;
export default LanPersonBikingRegular;
