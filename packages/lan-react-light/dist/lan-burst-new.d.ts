import React from 'react';

export interface LanBurstNewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstNew(props: LanBurstNewProps): React.ReactElement;
export default LanBurstNew;
