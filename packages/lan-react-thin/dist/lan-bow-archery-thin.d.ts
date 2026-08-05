import React from 'react';

export interface LanBowArcheryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArcheryThin(props: LanBowArcheryThinProps): React.ReactElement;
export default LanBowArcheryThin;
