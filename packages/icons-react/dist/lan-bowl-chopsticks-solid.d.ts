import React from 'react';

export interface LanBowlChopsticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlChopsticksSolid: React.FC<LanBowlChopsticksSolidProps>;
export default LanBowlChopsticksSolid;
