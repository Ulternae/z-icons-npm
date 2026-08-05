import React from 'react';

export interface LanBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBell(props: LanBellProps): React.ReactElement;
export default LanBell;
