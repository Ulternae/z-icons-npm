import React from 'react';

export interface LanBorderRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderRightThin(props: LanBorderRightThinProps): React.ReactElement;
export default LanBorderRightThin;
