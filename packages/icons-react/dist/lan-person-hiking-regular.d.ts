import React from 'react';

export interface LanPersonHikingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHikingRegular: React.FC<LanPersonHikingRegularProps>;
export default LanPersonHikingRegular;
