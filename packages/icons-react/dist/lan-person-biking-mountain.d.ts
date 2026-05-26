import React from 'react';

export interface LanPersonBikingMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBikingMountain: React.FC<LanPersonBikingMountainProps>;
export default LanPersonBikingMountain;
