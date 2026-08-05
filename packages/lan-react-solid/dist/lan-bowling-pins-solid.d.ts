import React from 'react';

export interface LanBowlingPinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlingPinsSolid(props: LanBowlingPinsSolidProps): React.ReactElement;
export default LanBowlingPinsSolid;
