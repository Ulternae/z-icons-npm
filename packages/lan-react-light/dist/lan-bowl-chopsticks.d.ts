import React from 'react';

export interface LanBowlChopsticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlChopsticks(props: LanBowlChopsticksProps): React.ReactElement;
export default LanBowlChopsticks;
