import React from 'react';

export interface LanBellRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellRingRegular(props: LanBellRingRegularProps): React.ReactElement;
export default LanBellRingRegular;
