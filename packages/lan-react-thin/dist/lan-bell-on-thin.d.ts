import React from 'react';

export interface LanBellOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellOnThin(props: LanBellOnThinProps): React.ReactElement;
export default LanBellOnThin;
