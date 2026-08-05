import React from 'react';

export interface LanBowlSaladThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSaladThin(props: LanBowlSaladThinProps): React.ReactElement;
export default LanBowlSaladThin;
