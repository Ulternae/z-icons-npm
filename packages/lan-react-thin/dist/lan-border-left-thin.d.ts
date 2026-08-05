import React from 'react';

export interface LanBorderLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderLeftThin(props: LanBorderLeftThinProps): React.ReactElement;
export default LanBorderLeftThin;
