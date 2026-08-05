import React from 'react';

export interface LanBowlChopsticksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlChopsticksThin(props: LanBowlChopsticksThinProps): React.ReactElement;
export default LanBowlChopsticksThin;
