import React from 'react';

export interface LanPersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBiking: React.FC<LanPersonBikingProps>;
export default LanPersonBiking;
