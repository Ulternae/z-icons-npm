import React from 'react';

export interface LanBellPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellPlus(props: LanBellPlusProps): React.ReactElement;
export default LanBellPlus;
