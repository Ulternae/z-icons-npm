import React from 'react';

export interface LanBorderTopLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopLeftThin(props: LanBorderTopLeftThinProps): React.ReactElement;
export default LanBorderTopLeftThin;
