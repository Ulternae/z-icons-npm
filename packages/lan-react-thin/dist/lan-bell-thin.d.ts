import React from 'react';

export interface LanBellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellThin(props: LanBellThinProps): React.ReactElement;
export default LanBellThin;
