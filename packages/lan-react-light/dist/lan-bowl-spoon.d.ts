import React from 'react';

export interface LanBowlSpoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSpoon(props: LanBowlSpoonProps): React.ReactElement;
export default LanBowlSpoon;
