import React from 'react';

export interface LanBorderTopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopThin(props: LanBorderTopThinProps): React.ReactElement;
export default LanBorderTopThin;
