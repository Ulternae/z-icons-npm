import React from 'react';

export interface LanRoadBarrierRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBarrierRegular: React.FC<LanRoadBarrierRegularProps>;
export default LanRoadBarrierRegular;
