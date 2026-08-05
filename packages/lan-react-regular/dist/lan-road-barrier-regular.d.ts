import React from 'react';

export interface LanRoadBarrierRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBarrierRegular(props: LanRoadBarrierRegularProps): React.ReactElement;
export default LanRoadBarrierRegular;
