import React from 'react';

export interface LanBringForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringForwardThin(props: LanBringForwardThinProps): React.ReactElement;
export default LanBringForwardThin;
