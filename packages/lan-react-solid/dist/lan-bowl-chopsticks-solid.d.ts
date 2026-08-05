import React from 'react';

export interface LanBowlChopsticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlChopsticksSolid(props: LanBowlChopsticksSolidProps): React.ReactElement;
export default LanBowlChopsticksSolid;
