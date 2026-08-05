import React from 'react';

export interface LanBowlSpoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSpoonThin(props: LanBowlSpoonThinProps): React.ReactElement;
export default LanBowlSpoonThin;
